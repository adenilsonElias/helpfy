import React, { createContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { MakeLogin, createAuthObserver, CreateNewUser, MakeLogout, getUser } from '../firebase/Authentication'
import { useDispatch } from 'react-redux'
import { setUser, makeLogout } from '../store/actions/user'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import Loading from '../screens/Loading/Loading'
import User from '../model/user'

// cria o contexto
const AuthContext = createContext({})

// cria um provider do contexto
export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    function addUserToRedux(user: User) {
        dispatch(setUser(user))
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
        })
    }

    function createUser(user) {
        setIsLoading(true)
        CreateNewUser(user, addUserToRedux).then((value) => {
            setIsLoading(false)
        })
    }

    function logOut() {
        setIsLoading(true)
        MakeLogout().then(() => {
            setIsLoading(false)
        })
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <AuthContext.Provider value={{ logIn, createUser, logOut, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

// exporta o contexto
export default AuthContext