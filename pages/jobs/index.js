import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV1 from "../../components/job-listing-pages/job-list-v1";


export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/public/jobOffers");
    const data = await res.json();
  
    return { props: { dataOL: data } };
  };
const index = ({dataOL}) => {
    console.log(dataOL)
  return (
    <>
      <Seo pageTitle="Cerca Lavoro" />
      <JobListV1  dataOL= {dataOL}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
