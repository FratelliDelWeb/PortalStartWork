import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import UsersProfile from "../../../components/dashboard-pages/area-privata/users-profile";
import axios from "axios";
import React, { useState, useEffect } from "react";



export async function getServerSideProps(context) {

  const cookie = context.req.headers.cookie;
 

 return { props: { cookie: cookie } };
}
function setId(){
const [id,setId] = useState();
const token = window.localStorage.getItem("token");
useEffect(() => {
  setId(token) 
  console.log(id);
  
},[token]);
return id;
}



const index = ({cookie}) => {
 const id = setId();
 console.log(id)
  

  return (
    <>
      <Seo pageTitle="Profilo" />
      <UsersProfile cookie={cookie} id =  {id} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
