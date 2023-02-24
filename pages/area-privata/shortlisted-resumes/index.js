import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ShortlistedResumes from "../../../components/dashboard-pages/area-privata/shortlisted-resumes";
import axios from "axios";
const api = process.env.API_ENDPOINT;
export async function getServerSideProps({ req }) {
  const res = await axios.get(api + "/candidates", {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataCL: data } };
}
const index = ({ dataCL }) => {
  return (
    <>
      <Seo pageTitle="Shortlisted Resumes" />
      <ShortlistedResumes dataCL={dataCL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
