import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home10 from "../components/home-10";
import { getCandidates } from "../services/public/getCandidates";
import { getjobOffers } from "../services/public/getjobOffers";
export async function getServerSideProps() {
  const data = await getCandidates();
  const dataOffer = await getjobOffers();
  // Props returned will be passed to the page component
  return { props: { dataCL: data, dataOL: dataOffer } };
}
const index = ({ dataCL, dataOL }) => {
  return (
    <>
      <Seo pageTitle="Home-10" />
      <Home10 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
