import React from "react";
import styles from "../styles/components/MainLayout.module.scss";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <title>Guess Wave</title>
      {children}
    </>
  );
};

export default MainLayout;
