import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV1 from "../../components/job-listing-pages/job-list-v1";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const getServerSideProps = async () => {
  const res = await fetch(api + "/public/jobOffers");
  const data = await res.json();

  return { props: { dataOL: data } };
};
const index = ({ dataOL }) => {
  return (
    <>
      <Seo pageTitle="Cerca Lavoro" />
      <JobListV1 dataOL={dataOL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
