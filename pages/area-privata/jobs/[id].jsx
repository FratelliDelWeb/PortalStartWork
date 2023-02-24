import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import Jobs from "../../../components/dashboard-pages/area-privata/jobs";
import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await axios.get(api + "/jobOffers/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataOL: data } };
}
const SingleCandidate = ({ dataOL }) => {
  return (
    <>
      <Seo pageTitle="Lavoro" />
      <Jobs dataOL={dataOL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
