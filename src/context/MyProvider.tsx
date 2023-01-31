import React, { useState, useEffect } from "react";
import { DataShape } from "../interfaces/interfaces";
import { getFiles } from "../services/api/filesApi";
import MyContext from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export default function MyProvider({ children }: MyProviderPropsShape) {
  const [shouldRequestPasswords, setShouldRequestPasswords] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [searchedFile, setSearchedFile] = useState<any>([]);

  const data = {
    shouldRequestPasswords,
    setShouldRequestPasswords,
    passwords,
    setPasswords,
    searchedFile,
    setSearchedFile,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
