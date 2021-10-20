import firebaseinit from "../Pages/Firebase/Firebase.init";
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseinit();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eror, setEror] = useState('');

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInpopup = () => {
        return signInWithPopup(auth, GoogleProvider);

    }
    const logOut = () => {
        signOut(auth)
        .then((result) => {
           
        }).catch((error) => {

        });

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);
    const signUpWithEmailPass = e => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                if (password.length < 6) {
                    setEror('You must Add 6 charecter pass')
                    return;
                }
                setUser(result.user);

            })
            .catch((error) => {
                setEror(eror.massege)
            });
    }

    return {
        user,
        signInpopup,
        logOut,
        onAuthStateChanged,
        signUpWithEmailPass,
        setEmail,
        setPassword,
        eror

    }

}
export default UseFirebase;