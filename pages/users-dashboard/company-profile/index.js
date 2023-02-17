import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import CompanyPorfile from "../../../components/dashboard-pages/area-privata/company-profile";

const index = () => {
  return (
    <>
      <Seo pageTitle="Profilo" />
      <CompanyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
