import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // signIn with google
    const googleProvider = new GoogleAuthProvider();

    // signInWithGoogle method apply
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }












    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);

            // jokhon kono user/error pabe tokhon loging(sprier) off hye jabe

        })

        return () => {
            unsubscribe();
        }
    }, []);



    const authInfo = { user, signInWithGoogle };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;