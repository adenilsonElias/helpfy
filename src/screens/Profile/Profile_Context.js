import React, { createContext, useState } from 'react'
import User from '../../model/user'
// cria o contexto
const ProfileContext = createContext({})


// cria um provider do contexto
export const ProfileContextProvider = ({ children }) => {

    const [user,setUser] = useState(new User({}))

    return (
        <ProfileContext.Provider value={{user,setUser}}>
            {children}
        </ProfileContext.Provider>
    )
}

// exporta o contexto
export default ProfileContext