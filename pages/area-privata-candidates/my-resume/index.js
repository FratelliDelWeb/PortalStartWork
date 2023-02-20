import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import MyResume from "../../../components/dashboard-pages/area-privata-candidates/my-resume";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Resume" />
      <MyResume />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
