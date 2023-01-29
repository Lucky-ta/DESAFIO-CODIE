import React, { useState } from "react";
import MyContext from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export default function MyProvider({ children }: MyProviderPropsShape) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldRequestPasswords, setShouldRequestPasswords] = useState(false);

  const data = {
    isModalOpen,
    setIsModalOpen,
    shouldRequestPasswords,
    setShouldRequestPasswords,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
