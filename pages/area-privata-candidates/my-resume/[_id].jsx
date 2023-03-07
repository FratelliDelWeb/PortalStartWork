import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import MyResume from "../../../components/dashboard-pages/area-privata-candidates/my-resume";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { signIn, useSession,getSession } from "next-auth/react"; 



 const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps({ req }) {
  const cookie = req.headers.cookie;
  const session = await getSession({ req })
  return { props: { cookie: cookie ,idUser: session.user.user }}
}  
const index = ({props,cookie ,idUser}) => {
  return (
    <>
      <Seo pageTitle="My Resume" />
      <MyResume idUser= {idUser} cookie={cookie} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
