import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHomeUser from "../../../components/dashboard-pages/users-dashboard/dashboard";

const index = () => {
  return (
    <>
      <Seo pageTitle="Users Dashboard" />
      <DashboadHomeUser />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
