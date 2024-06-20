import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components/Chat.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

interface msg {
  user: string;
  message: string;
}

interface ChatProps {
  username: string;
}

const Chat: React.FC<ChatProps> = ({ username }) => {
  const [chatHistory, setChatHistory] = useState<msg[]>([]);
  const [message, setMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const generateMessage = () => {
    let cpus = ["CPU 0", "CPU 1", "CPU 2", "CPU 3"];
    let msgs = [
      "Hello Everyone",
      "I can't get enough of this game",
      "I'm sorry for late, I've Just came from outside",
      "We'll have a great game, guys",
    ];

    let selected_user = cpus[Math.floor(Math.random() * cpus.length)];
    let selected_msg = msgs[Math.floor(Math.random() * msgs.length)];
    if (username) {
      console.log("test");
      setChatHistory((msg) => [
        ...msg,
        { user: selected_user, message: selected_msg },
      ]);
    }
    setTimeout(generateMessage, 4000);
  };

  useEffect(() => {
    setTimeout(generateMessage, 4000);
  }, [username]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatHistory((msg) => [...msg, { user: username, message: message }]);
    setMessage("");
  };

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faMessage} className={styles.trophyIcon} />
        <h2>Chat</h2>
      </div>
      <div className={styles.chatHistory}>
        {chatHistory.map((msg, index) => (
          <div key={index}>
            <div className={styles.message_header}>
              <p>{msg.user}:</p>
            </div>
            <div className={styles.message}>
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input}
            placeholder="Type a message..."
          />
          {username && (
            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Chat;
