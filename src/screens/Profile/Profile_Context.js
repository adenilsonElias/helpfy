import React, { createContext, useState } from 'react'
import User from '../../model/user'
// cria o contexto
const ProfileContext = createContext({})


// cria um provider do contexto
export const ProfileContextProvider = ({ children }) => {

    const [user,setUser] = useState(new User({}))
    const [isMyProfile, setIsMyProfile] = useState(false)

    return (
        <ProfileContext.Provider value={{user,setUser, isMyProfile, setIsMyProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}

// exporta o contexto
export default ProfileContext