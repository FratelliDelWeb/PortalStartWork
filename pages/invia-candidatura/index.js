import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import InviaCandiatura from "../../components/pages-menu/invia-candidatura";

const index = () => {
  return (
    <>
      <Seo pageTitle="Invia Candiatura" />
      <InviaCandiatura />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
