import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManageJobs from "../../../components/dashboard-pages/area-privata/manage-jobs";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Jobs" />
      <ManageJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
