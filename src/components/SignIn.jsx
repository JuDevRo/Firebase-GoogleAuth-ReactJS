import React from 'react'
import {provider, auth} from '../firebase/firebase'
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth'


const SignIn = () => {
    const SignInWithFirebase = () => {
        //const google_provider = new firebase.getAuth().GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.addScope('profile')
        provider.addScope('email')
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;})
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);})
    }

    return(
        <button onClick={SignInWithFirebase}>Sign In with Google</button>
    )
}

export default SignIn