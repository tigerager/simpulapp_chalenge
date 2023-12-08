import React from "react";
import "./App.css";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom";
import { firebaseAuth } from "./config/firebase";
import Logout from "./components/Logout";
import Login from "./components/Login";

getAnalytics();

function App() {
  const [user] = useAuthState(firebaseAuth);
  return (
    <div className="App">
      <header>
        <img alt=""
          className="logo"
          src=
            "https://media.istockphoto.com/id/1445614323/id/foto/kota-pintar-dengan-jalur-cahaya-bercahaya-garis-kecepatan-mengelilingi-kota-konsep-teknologi.jpg?s=2048x2048&w=is&k=20&c=fmFnxou21szzQbCZ-9wof5C6EfgeAebMgW0SRtIyxHk="
          
        />
        {user ? <h2>{`Welcome`}</h2> : <></>}
        <Logout />
      </header>

      <section>{user ? <ChatRoom /> : <Login />}</section>
    </div>
  );
}

export default App;