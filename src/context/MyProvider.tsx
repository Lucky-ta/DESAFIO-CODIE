import React, { useState, useEffect } from "react";
import { getFiles } from "../services/api/filesApi";
import MyContext from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export default function MyProvider({ children }: MyProviderPropsShape) {
  const [reloadPageTrigger, setReloadPageTrigger] = useState(false);
  const [filteredFiles, setFilteredFiles] = useState<any>();
  const [simpleModalStatus, setSimpleModalStatus] = useState(false);

  const data = {
    reloadPageTrigger,
    setReloadPageTrigger,
    filteredFiles,
    setFilteredFiles,
    simpleModalStatus,
    setSimpleModalStatus,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
