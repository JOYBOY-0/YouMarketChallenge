import React, { createContext, FC, useContext, useState } from "react";

interface UserProviderProps {
    children: React.ReactNode;
}

type ContextType = {
    user: {
        balance: number;
    };
    addFounds: (amount: number) => void;
};

const userContext = createContext<ContextType | null>(null);

const useUserContext = () => useContext(userContext) as ContextType;

const UserProvider : FC<UserProviderProps> = ({ children }) => {
  
  const [user, setUser] = useState({
    balance: 10000,
  });
  
  function addFounds(amount : number){
    setUser((prevUser) => ({
        ...prevUser,
        balance: prevUser.balance + amount
    }));
  }

  return (
    <userContext.Provider
      value={{
        user,
        addFounds
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserProvider, useUserContext };
