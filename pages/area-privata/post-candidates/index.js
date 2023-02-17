import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import PostCandidato from "../../../components/dashboard-pages/area-privata/post-candidates";

const index = () => {
  return (
    <>
      <Seo pageTitle="Inserisci Candidato" />
      <PostCandidato />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
