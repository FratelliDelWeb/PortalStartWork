import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home9 from "../components/home-9";
import axios from "axios";
import React, { useState } from "react";
import { getCandidates } from "../services/public/getCandidates";
import { getjobOffers } from "../services/public/getjobOffers";
import { signIn, signOut, getSession } from 'next-auth/react'

import { getServerSession } from "next-auth/next"


export async function getServerSideProps({ req, res }) {
   const data = await getCandidates();
  const dataOffer = await getjobOffers();
  console.log(req,res)
  return {
    props: {
    dataCL: data, dataOL: dataOffer 
    }
  }
}
const index = ({ dataCL, dataOL }) => {
  const session =  getSession()
  console.log(session)
  return (
    <>
      <Seo pageTitle="STARTWORK" />
      <Home9 dataCL={dataCL} dataOL={dataOL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
