import { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

interface Msg {
  user: string;
  message: string;
}

interface MsgFromServer {
  username: string;
  message: string;
}

interface ChatProps {
  username: string;
}

const Chat = ({ username }: ChatProps) => {
  const [chatHistory, setChatHistory] = useState<Msg[]>([]);
  const [message, setMessage] = useState("");
  const chatHistoryRef = useRef<HTMLDivElement>(null);
  const ws = useRef<WebSocket | null>(null);

  // useEffect(() => {
  //   ws.current = new WebSocket('ws://http://localhost:3000');

  //   ws.current.onopen = () => {
  //     console.log("Connected to WebSocket server!");
  //   };

  //   ws.current.onmessage = (event) => {
  //     const messageData = JSON.parse(event.data);
  //     console.log("Message received from server:", messageData);

  //     if (messageData.type === 'initial') {
  //       messageData.messages.forEach((message: MsgFromServer) => {
  //         appendMessage({ user: message.username, message: message.message });
  //       });
  //     } else if (messageData.type === 'message') {
  //       appendMessage({ user: messageData.data.username, message: messageData.data.message });
  //     }
  //   };

  //   ws.current.onclose = () => {
  //     console.log("Disconnected from WebSocket server");
  //   };

  //   return () => {
  //     ws.current?.close();
  //   };
  // }, []);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const appendMessage = (message: Msg) => {
    console.log(message);
    setChatHistory((msg) => [
      ...msg,
      { user: message.user, message: message.message },
    ]);
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !message.trim()) {
      return;
    }
    if (ws.current) {
      const outgoingMessage = { user: username, message: message };
      ws.current.send(JSON.stringify(outgoingMessage));
      setMessage("");
    }
  };

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faMessage} className={styles.trophyIcon} />
        <h2>Chat</h2>
      </div>
      <div className={styles.chatHistory} ref={chatHistoryRef}>
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
