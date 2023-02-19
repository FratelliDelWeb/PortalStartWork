import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/area-privata/dashboard";
import axios from "axios";
import {getCandidatesPrivate} from "../../../services/private/getCandidatesPrivate"
export async function getServerSideProps({ req }) {

  const data = await getCandidatesPrivate(req)
  return { props: { dataCL: data } };
}

const index = ({dataCL}) => {
  return (
    <>
      <Seo pageTitle="Users Dashboard" />
      <DashboadHome dataCL={dataCL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
