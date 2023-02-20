import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Messages from "../../../components/dashboard-pages/area-privata-candidates/messages";

const index = () => {
  return (
    <>
      <Seo pageTitle="Messages" />
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
