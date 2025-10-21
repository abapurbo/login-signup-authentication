import React, { useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../config/firebase.config';

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);



    // email and password signUp user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user signin
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user signOut
    const userSignOut = () => {
        return signOut(auth)
    }

    const socialProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //  onAuthStateChanged this is user observe that means user detected
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])
    const authInfo = {
        user,
        createUser,
        loginUser,
        userSignOut,
        socialProvider,
        googleProvider,
        githubProvider,
        facebookProvider

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
