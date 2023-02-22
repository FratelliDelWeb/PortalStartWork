import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ShortListedJobs from "../../../components/dashboard-pages/area-privata-candidates/short-listed-jobs";
import JobListV10 from "../../../components/job-listing-pages/job-list-v1";
import {getjobOffersPrivate} from "../../../services/private/getjobOffersPrivate"
export async function getServerSideProps({ req }) {

  const data = await getjobOffersPrivate(req)
  return { props: { dataOL: data } };
}
const index = ({dataOL}) => {
  return (
    <>
      <Seo pageTitle="Short ListedJobs" />
    

  
      <ShortListedJobs  dataOL = {dataOL}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
