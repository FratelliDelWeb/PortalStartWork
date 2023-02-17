import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/area-privata/dashboard";

import axios from "axios";

export async function getServerSideProps({ req }) {
  const res = await axios.get("http://localhost:3000/api/candidates", {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataCL: data } };
}


const index = ({dataCL}) => {
  return (
    <>
      <Seo pageTitle="Users Dashboard" />
      <DashboadHome   dataCL = {dataCL}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
