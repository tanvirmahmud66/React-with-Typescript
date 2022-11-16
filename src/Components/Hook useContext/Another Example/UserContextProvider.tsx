import React, { createContext, useState } from "react";

type UserContextProviderPropsType = {
  children: React.ReactNode;
};

type Auth = {
  name: string;
  email: string;
};
type Context = {
  state: Auth | null;
  setState: React.Dispatch<React.SetStateAction<Auth | null>>;
};

export const UserContext = createContext({} as Context);

export const UserContextProvider = ({
  children,
}: UserContextProviderPropsType) => {
  const [state, setState] = useState<Auth | null>(null);
  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};
