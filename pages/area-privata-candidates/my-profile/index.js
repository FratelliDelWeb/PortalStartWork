import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import MyProfile from "../../../components/dashboard-pages/area-privata-candidates/my-profile";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Profile" />
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
