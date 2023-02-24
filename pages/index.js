import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home9 from "../components/home-9";
import axios from "axios";
import React, { useState } from "react";
import { getCandidates } from "../services/public/getCandidates";
import { getjobOffers } from "../services/public/getjobOffers";
export async function getServerSideProps() {
  const data = await getCandidates();
  const dataOffer = await getjobOffers();
  console.log(data);
  console.log(dataOffer);
  // Props returned will be passed to the page component
  return { props: { dataCL: data, dataOL: dataOffer } };
}

const index = ({ dataCL, dataOL }) => {
  return (
    <>
      <Seo pageTitle="STARTWORK" />
      <Home9 dataCL={dataCL} dataOL={dataOL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
