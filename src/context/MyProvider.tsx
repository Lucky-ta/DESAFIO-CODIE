import React, { useState } from "react";
import { DataShape } from "../interfaces/interfaces";
import MyContext from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export default function MyProvider({ children }: MyProviderPropsShape) {
  const [shouldRequestPasswords, setShouldRequestPasswords] = useState(false);
  const [files, setFiles] = useState({});
  const [passwords, setPasswords] = useState([]);

  const data = {
    shouldRequestPasswords,
    setShouldRequestPasswords,
    files,
    setFiles,
    passwords,
    setPasswords,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
