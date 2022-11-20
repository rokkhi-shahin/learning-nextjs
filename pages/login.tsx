import { signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
    const firebaseCredentials = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }
    let app = initializeApp(firebaseCredentials);
    const auth = getAuth(app);
    const emailPasswordSignIn = async () => {
        await signInWithEmailAndPassword(auth, "rokkhi.shahin@gmail.com", "test1234")
            .then(authUser => {
                console.log("Successfully signed in: ", authUser)
            })
            .catch(error => {
                console.log("Error. The user is not signed in", error.message)
            });
    };
    const provider = new GoogleAuthProvider();
    const googleSignIn = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("Successfully signed in: ", user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("Error. The user is not signed in", error.message)
            });
    }
    return (
        <div className="py-0 px-8">
            {/* <LoginForm /> */}
            <div className="flex justify-center gap-4">
                <button onClick={emailPasswordSignIn} className="text-center bg-blue-300 hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="button">
                    Sign In
                </button>
                <button onClick={googleSignIn} className="text-center bg-blue-300 hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="button">
                    Google SignIn
                </button>
            </div>
            <footer className="flex flex-1 justify-center items-center border-t py-8">
                Developed by<span style={{ fontWeight: 'bold', marginLeft: '5px' }}>Shahin</span>
            </footer>
        </div>
    )
}
