import { useState } from "react";
import styles from "./Welcome.module.scss";

interface WelcomeProps {
  handleNameSubmit: (username: string) => void;
}

const Welcome = ({ handleNameSubmit }: WelcomeProps) => {
  const [name, setName] = useState("");

  const handleAccept = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNameSubmit(name);
  };

  return (
    <>
      <form className={styles.welcomeCard} onSubmit={handleAccept}>
        <h1>Welcome</h1>
        <p>Please Enter Your Name</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Accept</button>
      </form>
    </>
  );
};

export default Welcome;
