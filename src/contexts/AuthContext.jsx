import { createContext, useState, useEffect } from "react";
export const Authcontext = createContext();

export const AuthProvider = ({ children})=>{
   const [isAuth, setIsAuth] = useState(false);
   useEffect(()=>{
    const loggedIn = localStorage.getItem('isAuth') === 'true'
    setIsAuth(loggedIn);
   },[]);

   const login = ()=>{
    localStorage.setItem('isAuth', "true");
    setIsAuth(true);
   }

   const logout = ()=>{
    console.log('logout')
    localStorage.removeItem('isAuth');
    setIsAuth(false);
   }

   return (
    <Authcontext.Provider value= {{isAuth, login, logout}}>
      {children}
    </Authcontext.Provider>
   )
}