import react, { createContext, useState } from "react";
//CPC
export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    Name: "Imran",
    LastName: "Jaleel",
    Age: 23,
    Profile: "Developer",
  });
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
