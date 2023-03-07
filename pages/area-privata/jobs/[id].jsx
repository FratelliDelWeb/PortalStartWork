import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import Jobs from "../../../components/dashboard-pages/area-privata/jobs";
import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps(context) {
  const idJob = context.query.id;
  const cookie = context.req.headers.cookie

  return { props: { cookie: cookie ,idJob :idJob } };
}



const SingleCandidate = ({ cookie,idJob }) => {
  return (
    <>
      <Seo pageTitle="Lavoro" />
      <Jobs cookie = {cookie} idJob={idJob}   />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
