import React, { createContext, useState } from 'react'

// cria o contexto
const AuthContext = createContext({})

// cria um provider do contexto
export const AuthContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    
    setLog = (login) => {
        // console.log(login);
        setLogin(login)
    }

    return (
        <AuthContext.Provider value={{ login: login, setlogin: setLog }}>
            {children}
        </AuthContext.Provider>
    )
}

// exporta o contexto
export default AuthContext