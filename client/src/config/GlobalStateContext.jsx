import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedrole, setSelectedRole] = useState("");
  const [valid, setValid] = useState(false);
  return (
    <UserContext.Provider value={{ selectedrole, setSelectedRole,valid, setValid }}>
      {children}
    </UserContext.Provider>
  );
};


const useGlobalContext =()=>{

    const dt = useContext(UserContext);
    return dt;
}
export default useGlobalContext;