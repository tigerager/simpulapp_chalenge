import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../../config/firebase";

function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Login with Google
      </button>
    </>
  );
}

export default Login;