import React, { createContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { MakeLogin, createAuthObserver, CreateNewUser, MakeLogout } from '../firebase/Authentication'

// cria o contexto
const AuthContext = createContext({})

// cria um provider do contexto
export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        createAuthObserver((user) =>{
            if(user){
               setIsLogged(true)
            }
            else {
                setIsLogged(false)
            }
        })
    },[])

    function logIn(username,password){
        setIsLoading(true)
        MakeLogin(username,password).then((value) =>{
            setIsLoading(false);
        })
    }

    function createUser(user){
        setIsLoading(true)
        CreateNewUser(user).then((value)=>{
            setIsLoading(false)
        })
    }

    function logOut(){
        setIsLoading(true)
        MakeLogout().then(() => {
            setIsLoading(false)
        })
    }

    if (isLoading){
        return (
            <View>
                <Text> Verificando autenticação do usuario...</Text>
            </View>
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