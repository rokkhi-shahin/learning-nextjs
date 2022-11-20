import { useRouter } from 'next/router';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

export default function Login() {
    const firebaseCredentials = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }
    let app = initializeApp(firebaseCredentials);
    const auth = getAuth(app);
    const onSubmit = async () => {
        await signInWithEmailAndPassword(auth,"rokkhi.shahin@gmail.com", "test1234")
            .then(authUser => {
                console.log("Successfully signed in: ", authUser)
            })
            .catch(error => {
                console.log("Error. The user is not signed in", error.message)
            });
    };
    return (
        <div className="py-0 px-8">
            {/* <LoginForm /> */}
            <button onClick={onSubmit} className="text-center bg-blue-300 hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="button">
                Sign In
            </button>
            <footer className="flex flex-1 justify-center items-center border-t py-8">
                Developed by<span style={{ fontWeight: 'bold', marginLeft: '5px' }}>Shahin</span>
            </footer>
        </div>
    )
}
