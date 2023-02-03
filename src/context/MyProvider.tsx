import React, { useState } from "react";

import { FileShape } from "interfaces/interfaces";

import MyContext from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export default function MyProvider({ children }: MyProviderPropsShape) {
  const [reloadPageTrigger, setReloadPageTrigger] = useState(false);
  const [simpleModalStatus, setSimpleModalStatus] = useState(false);
  const [filterWord, setFilterWord] = useState("");

  const data = {
    reloadPageTrigger,
    setReloadPageTrigger,
    simpleModalStatus,
    setSimpleModalStatus,
    filterWord,
    setFilterWord,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
