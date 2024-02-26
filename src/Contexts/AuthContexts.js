import React, { useContext, useState, useEffect } from "react";
import { createNewUser, signInUser, auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

// Sets up values for Auth context
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    // Passes props to createNewUser
    const signup = async (email,password) => createNewUser(email, password)

    // Passes props to signInUser
    const signin = (email, password) =>  signInUser(email, password)

    useEffect(() => {
        // Set Current user then unsubcribe
        const unsubscribe = auth.onAuthStateChanged(user => {
            try {
                setCurrentUser(user)
            } catch (error) {
                console.log('Error setting currentUser: ', error)
            }
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup,
        signin
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}