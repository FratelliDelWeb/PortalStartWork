import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import About from "../components/pages-menu/servizi";

const index = () => {
  return (
    <>
      <Seo pageTitle="Servizi" />
      <About />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
