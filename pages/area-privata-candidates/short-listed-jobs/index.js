import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ShortListedJobs from "../../../components/dashboard-pages/area-privata-candidates/short-listed-jobs";
import JobListV10 from "../../../components/job-listing-pages/job-list-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Short ListedJobs" />
    

  
      <ShortListedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
