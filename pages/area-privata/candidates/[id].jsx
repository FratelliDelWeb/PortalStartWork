import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import Candidato from "../../../components/dashboard-pages/area-privata/candidate";
import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps(context) {
  const idCandidato = context.query.id;
  const cookie = context.req.headers.cookie
  /* const res = await axios.get(api + "/candidates/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  }); */
  /* const data = await res.data; */
  return { props: { cookie: cookie ,idCandidato : idCandidato} };
}

const SingleCandidate = ({ cookie ,idCandidato}) => {
  console.log("id candidato page  ",idCandidato);
  console.log("cookie candidato page  ",cookie)
  return (
    <>
      <Seo pageTitle="Candidato" />
      <Candidato  cookie = {cookie} idCandidato={idCandidato}  />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
