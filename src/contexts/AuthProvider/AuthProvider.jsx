import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // signIn with google
    const googleProvider = new GoogleAuthProvider();

    // signInWithGoogle method apply
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // email password signUp
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // display uer name & photoURL
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // verify Email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }












    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state changed', currentUser);
            // setUser(currentUser);

            // Email verified na hole user k login korte dibo na
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            // jokhon kono user/error pabe tokhon loging(sprier) off hye jabe
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);



    const authInfo = { user, signInWithGoogle, createUser, logOut, signIn, updateUserProfile, verifyEmail, loading, setLoading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;