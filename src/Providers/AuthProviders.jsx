import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            Swal.fire("You Logged Out Successfully");
          })
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, { displayName:name, photoURL: photo})
        
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            // if user exist then issue a token
            if(currentUser){
                
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true })
                .then(res => {
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser, {
                    withCredentials:true
                })
                .then(res =>{
                    console.log(res.data);
                })
            }
        })
        return ()=>{
            return unSubscribe();
        }
    },[])


    const authInfo ={ createUser, signIn, user, logOut, updateUserProfile, loading,googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;