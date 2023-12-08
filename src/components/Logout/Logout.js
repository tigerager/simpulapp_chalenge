import { firebaseAuth } from "../../config/firebase";
import {signOut} from "firebase/auth";

function Logout() {
  return (
    firebaseAuth.currentUser && (
      <button className="sign-out" onClick={() => {signOut(firebaseAuth); window.location.reload(true)}}>
        Sign Out
      </button>
    )
  );
}

export default Logout;