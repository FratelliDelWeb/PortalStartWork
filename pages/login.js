import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import LogIn from "../components/pages-menu/login";
import { signIn, signOut, getSession ,useSession } from 'next-auth/react'
import { useEffect } from "react";

const index = () => {
  const { data: session, status } = useSession()
 
  useEffect(() => {checkRole(session)},[session])

  const checkRole = (session) => {
    if(session){
      console.log(session)
     const userRole =   session.user.role;
     const id = session.user.user;
     const idSet = localStorage.setItem('token',id);
     if(userRole=== "admin" || userRole=== "basic"){
       window.location.replace("/area-privata/dashboard");
     }else  window.location.replace("/area-privata/dashboard");
    }

  }
  return (
    <>
      <Seo pageTitle="Login" />
      <LogIn />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
