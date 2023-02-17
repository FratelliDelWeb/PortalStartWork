import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AllApplicants from "../../../components/dashboard-pages/users-dashboard/all-applicants";
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

export async function loadData() {
  const res = await fetch("http://localhost:3000/api/candidates");
  console.log("RES => ", res);
  const data = await res.json();

  return data;
}

const index = ({ dataCL }) => {
  console.log(dataCL);
  return (
    <>
      <Seo pageTitle="All Applicants" />
      <AllApplicants dataCL={dataCL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
