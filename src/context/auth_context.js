import React, { createContext, useState, useEffect } from 'react'
import { MakeLogin, createAuthObserver, CreateNewUser, MakeLogout, getUser, setUserListener, makeUnsub } from '../firebase/Authentication'
import { useDispatch } from 'react-redux'
import { setUser, makeLogout } from '../store/actions/user'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import Loading from '../screens/Loading/Loading'
import User from '../model/user'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import Toast from 'react-native-simple-toast'

// cria o contexto
const AuthContext = createContext({} )

// cria um provider do contexto
export const AuthContextProvider = ({ children }) => {
    // @TODO não deixar ele voltar para a tela feed quando login falhar

    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    function addUserToRedux(user: User) {
        dispatch(setUser(user))
        setUserListener(user.id, (user: FirebaseFirestoreTypes.DocumentSnapshot) => {
            dispatch(setUser(new User({ ...user.data(), id: user.id })))
        })
    }

    useEffect(() => {
        createAuthObserver((user: FirebaseAuthTypes.User) => {
            if (user) {
                getUser(user.uid).then((value) => {
                    addUserToRedux(value);
                }).catch((error) => {
                    console.error(error)
                })
                setIsLogged(true)
            }
            else {
                dispatch(makeLogout())
                setIsLogged(false)
            }
        })
    }, [])

    function logIn(username, password) {
        setIsLoading(true)
        MakeLogin(username, password).then((value) => {
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false)
            Toast.show("E-mail ou senha incorretos", Toast.LONG)
        })
    }

    function createUser(user) {
        setIsLoading(true)
        CreateNewUser(user, addUserToRedux).then((value) => {
            setIsLoading(false)
        })
    }

    //@TODO Quando edita imagem atualiza as contas logadas para o mesmo usuario
    //Parece ser problema de listerner morto
    //Em edicao de imagem e salvar nao executa o unsub
    function logOut() {
        setIsLoading(true)
        MakeLogout().then(() => {
            makeUnsub()
            setIsLoading(false)
        })
    }

    // if (isLoading) {
    //     return (
    //         <Loading />
    //     )
    // }

    return (
        <AuthContext.Provider value={{ logIn, createUser, logOut, isLogged }}>
            {isLoading ? <Loading /> : children}
        </AuthContext.Provider>
    )
}

// exporta o contexto
export default AuthContext