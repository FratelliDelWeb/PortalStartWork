import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import Candidato from "../../../components/dashboard-pages/area-privata/candidate";
import axios from "axios";

export async function getServerSideProps(context) {
  const  id  = context.query.id;
  const res = await axios.get("http://localhost:3000/api/candidates/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataCL: data } };
}

const SingleCandidate = ({dataCL}) => {
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    if (!dataCL) <h1>Loading...</h1>;
    else setCandidate(dataCL);
    return () => {};
  }, [dataCL]);
  console.log(candidate)
  return (
    <>
      <Seo pageTitle="Candidato" />
      <Candidato dataCL = {candidate}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
