import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AllApplicants from "../../../components/dashboard-pages/area-privata/all-applicants";
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/public/candidates');
  const data = await res.json();

  return{props:{dataCL : data}}
} 
const index = ({dataCL}) => {
  console.log(dataCL)
  return (
    <>
      <Seo pageTitle="All Applicants" />
      <AllApplicants  dataCL = {dataCL}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
