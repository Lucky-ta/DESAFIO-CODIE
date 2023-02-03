import React, { useState } from "react";

import { FileShape } from "interfaces/interfaces";

import MyContext from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export default function MyProvider({ children }: MyProviderPropsShape) {
  const [reloadPageTrigger, setReloadPageTrigger] = useState(false);
  const [filteredFiles, setFilteredFiles] = useState<FileShape[]>();
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
