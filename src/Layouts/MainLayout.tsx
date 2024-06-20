import React from "react";
import styles from "../styles/components/MainLayout.module.scss";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <title>Guess Wave</title>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
