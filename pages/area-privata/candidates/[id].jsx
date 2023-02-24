import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import Candidato from "../../../components/dashboard-pages/area-privata/candidate";
import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await axios.get(api + "/candidates/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataCL: data } };
}

const SingleCandidate = ({ dataCL }) => {
  return (
    <>
      <Seo pageTitle="Candidato" />
      <Candidato dataCL={dataCL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
