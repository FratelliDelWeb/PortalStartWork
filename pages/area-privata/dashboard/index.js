import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/area-privata/dashboard";
import axios from "axios";
import {getCandidatesPrivate} from "../../../services/private/getCandidatesPrivate";
import React, { useState, useEffect } from "react";
import { signIn, useSession,getSession } from "next-auth/react"; 


const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps({ req }) {
  const cookie = req.headers.cookie;
  const session = await getSession({ req })
  const data = await getCandidatesPrivate(req)
  return { props: { dataCL: data,idUser: session.user.user } };
}



const index = ({dataCL}) => {
  return (
    <>
      <Seo pageTitle="Users Dashboard" />
      <DashboadHome dataCL={dataCL}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
