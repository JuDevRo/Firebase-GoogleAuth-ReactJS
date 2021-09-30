import React from 'react'
import {auth} from '../firebase/firebase'
import {signOut} from 'firebase/auth'


const Home = () => {
    const signOu = () => {
        signOut(auth).then(() => {console.log('Saliste con exito')}).catch((error) => {console.log(error)})
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={signOu}>Sign Out</button>
        </>
    )
}

export default Home