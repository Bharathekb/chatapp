import React from "react";
import { useState } from "react";
import Header from "../components/Header";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    } else {
      console.log("please type msg");
    }
  };

  return (
    <div className="Right-main">
      <Header />
      <div className="Chat-container">
        {/* <h2 className="ChatHeading">Chat room</h2> */}
        <div className="Chatbox">
          {messages.map((msg, index) => (
            <div key={index} className="Message alert alert-secondary">
              {msg}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="Send-form">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
