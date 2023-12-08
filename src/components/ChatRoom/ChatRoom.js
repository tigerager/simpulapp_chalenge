import React, { useRef, useState } from "react";
import {collection, getDocs, addDoc, orderBy, limit, query, serverTimestamp, } from "firebase/firestore";
import { firebaseAuth, firebaseFirestore } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatMessage from "../ChatMessage";

function ChatRoom() {
  const [user] = useAuthState(firebaseAuth);
  const divForAutoScroll = useRef();
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");
  const messagesRef = collection(firebaseFirestore, "chat-messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  getDocs(q).then((response) => {
    setMessages(response.docs.map((doc) => doc.data()));
  });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = firebaseAuth.currentUser;

    await addDoc(collection(firebaseFirestore, "chat-messages"), {
      name: user?.displayName,
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    divForAutoScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.createdAt} message={msg} />
          ))}

        <span ref={divForAutoScroll}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Write a message..."
        />

        <button type="submit" className="button-submit" disabled={!formValue}>
          ➡️
        </button>
      </form>
    </>
  );
}

export default ChatRoom;