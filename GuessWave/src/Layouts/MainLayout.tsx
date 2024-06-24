import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <title>Guess Wave</title>
      {children}
    </>
  );
};

export default MainLayout;
