import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { RiChat1Line, RiCloseFill } from "react-icons/ri";
import './chat.scss';

const socket = io("http://localhost:5000");

function Chat() {
  const [active, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    const messageObj = {
      text: message,
      sender: "user",
    };
    socket.emit("sendMessage", messageObj);
    setMessage("");
  };

  return (
    <div className='chat'>
      {active !== true && (
        <div onClick={() => setIsActive(true)} className="chat__img">
          <RiChat1Line />
        </div>
      )}
      {active && (
        <div className="chat__area">
          <div className="chat__area__title">
            <h2>Xoşgəldiniz</h2>
            <RiCloseFill onClick={() => setIsActive(false)} />
          </div>
          <div className='chat__area__message'>
            {messages.map((msg, index) => (
              <p key={index} className={msg.sender === "user" ? "user-message" : "server-message"}>
                {msg.text}
              </p>
            ))}
          </div>
          <div className="chat__area__form">
            <input 
              type="text" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
            <button onClick={sendMessage}>Göndər</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;