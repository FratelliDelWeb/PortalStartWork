import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import CandidatesListV5 from "../components/candidates-listing-pages/candidates-list-v5";
export const getStaticProps = async () => {
  const res = await fetch('api/public/candidates');
  const data = await res.json();

  return{props:{dataCL : data}}
} 
const index = ({dataCL}) => {
  return (
    <>
      <Seo pageTitle="Candidates List V5" />
      <CandidatesListV5  dataCL = {dataCL}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
