import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import EmployersListV2 from "../components/employers-listing-pages/employers-list-v2";

const index = ({dataOL}) => {
  return (
    <>
      <Seo pageTitle="Employers List V2" />
      <EmployersListV2 dataOL={dataOL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
