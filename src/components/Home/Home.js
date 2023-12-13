import React from "react";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import ChatRoom from "../ChatRoom";
import './Home.css';
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../../components/Login";
import { firebaseAuth } from "../../config/firebase";
import Todo from "../../components/todo";
import Logout from "../Logout";
getAnalytics();

function Home() {
  function showHide(){
    if(document.getElementById("chat").style.visibility === "hidden"){
      document.getElementById("chat").style.visibility = "visible";
      document.getElementById("container").style.visibility = "hidden";
    }else{
      document.getElementById("chat").style.visibility = "hidden";
    }
  }
  function showHideTodo(){
    if(document.getElementById("container").style.visibility === "hidden"){
      document.getElementById("container").style.visibility = "visible";
      document.getElementById("chat").style.visibility = "hidden";
    }else{
      document.getElementById("container").style.visibility = "hidden";
    }
  }
  const [user] = useAuthState(firebaseAuth);
 
  return (
    <>
    {user ? <ChatRoom /> : <Login />}
    {user ? <Todo /> : <></>}
    {user ? <Logout /> : <></>}
    {user ? <img src="https://cdn-icons-png.flaticon.com/128/134/134935.png" alt="" className="showHide" style={{ position: "absolute", bottom: "20px" }} onClick={showHide} /> : <></>}
    {user ? <img src="https://cdn-icons-png.flaticon.com/128/9285/9285054.png" alt="" className="todoList" onClick={showHideTodo}/> : <></>}
    </>
  );
}

export default Home;