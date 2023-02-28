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
     const userRole =   session.user.role;
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
