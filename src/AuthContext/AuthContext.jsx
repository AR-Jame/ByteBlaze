import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";
export const AuthDataContext = createContext(null)

const AuthContext = ({ children }) => {
    const [authData, setAuthData] = useState(null)
    const [loading, setLoading] = useState(true)
    const registration = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleProvider = new GoogleAuthProvider
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            user ? setAuthData(user) : setAuthData(null)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        authData,
        setAuthData,
        registration,
        login,
        googleLogin,
        logOut,
        loading
    }
    return (
        <AuthDataContext.Provider value={authInfo}>
            {children}
        </AuthDataContext.Provider>
    );
};

export default AuthContext;