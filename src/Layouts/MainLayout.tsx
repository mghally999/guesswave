import React from "react";
import styles from "../styles/components/MainLayout.module.scss";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <title>Guess Wave</title>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default MainLayout;
