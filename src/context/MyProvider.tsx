import React, { useState } from "react";
import { DataShape } from "../interfaces/interfaces";
import MyContext from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export default function MyProvider({ children }: MyProviderPropsShape) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldRequestPasswords, setShouldRequestPasswords] = useState(false);
  const [files, setFiles] = useState({});
  const [newCurrentFile, setNewCurrentFile] = useState<any>({});

  const data = {
    isModalOpen,
    setIsModalOpen,
    shouldRequestPasswords,
    setShouldRequestPasswords,
    files,
    setFiles,
    newCurrentFile,
    setNewCurrentFile,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
