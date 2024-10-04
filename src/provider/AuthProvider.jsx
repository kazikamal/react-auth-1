import { createContext, useEffect, useState } from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import app from './../../public/firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
   
    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    const logoutUser = () =>{
        return signOut(auth);
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return() =>{
            unsubscribe();
        }
    }, [])

    return (
        <div>
            <AuthContext.Provider value = {{loginWithGoogle, user, logoutUser}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
