import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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
        .then(()=>{
            console.log('profile updated')
        })
        .catch( error =>{
            console.log(error)
        })
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
                
                axios.post('https://library-management-server-pi.vercel.app/jwt', loggedUser, {withCredentials: true })
                .then(res => {
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('https://library-management-server-pi.vercel.app/logout',loggedUser, {
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


    const authInfo ={ createUser, signIn, user, logOut, updateUserProfile, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;