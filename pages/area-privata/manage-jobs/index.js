import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManageJobs from "../../../components/dashboard-pages/area-privata/manage-jobs";
import { getjobOffersPrivate } from "../../../services/private/getjobOffersPrivate";
export async function getServerSideProps({ req }) {
  const data = await getjobOffersPrivate(req);
  return { props: { dataOL: data } };
}
const index = ({ dataOL }) => {
  return (
    <>
      <Seo pageTitle="Manage Jobs" />
      <ManageJobs dataOL={dataOL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
