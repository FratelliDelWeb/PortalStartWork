import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Candidato from "../../../components/dashboard-pages/area-privata/candidate";

const index = () => {
  return (
    <>
      <Seo pageTitle="Candidato" />
      <Candidato />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
