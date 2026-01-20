import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedrole, setSelectedRole] = useState("");
   const [userData, setUserData] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [valid, setValid] = useState(false);
  
   const check = async()=>{

     const url = fetch("http://localhost:5000/user/profile", {
      credentials: "include",
    })

    const result = await url;
   
    if(result.ok){
   const data = await result.json();
   setUserLoggedIn(true)
  setUserData(data.data[0])
    }
   
 

    }

  
  useEffect(() => {
  check();
}, []);

useEffect(() => {
  if (userData) {
    console.log("User data updated:", userData);
  }
}, [userData]);



  return (
    <UserContext.Provider value={{ selectedrole, setSelectedRole,valid, setValid,userData, setUserData, userLoggedIn, setUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};


const useGlobalContext =()=>{

    const dt = useContext(UserContext);
    return dt;
}
export default useGlobalContext;