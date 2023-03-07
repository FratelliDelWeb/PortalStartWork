import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/area-privata-candidates/dashboard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { signIn, useSession,getSession } from "next-auth/react"; 
import { getjobOffersPrivate } from "../../../services/private/getjobOffersPrivate";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps({ req }) {
  const cookie = req.headers.cookie;
  const data = await getjobOffersPrivate(req);
  const session = await getSession({ req });
  return { props: { dataOL: data,idUser: session.user.user ,cookie: cookie} };
}

const index = ({dataOL,idUser,cookie}) => {
    return (
        <>
            <Seo pageTitle="Area privata candidato" />
            <DashboadHome dataOL={dataOL} idUser={idUser} cookie={cookie}/>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
