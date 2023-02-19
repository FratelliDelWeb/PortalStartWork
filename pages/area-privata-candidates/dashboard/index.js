import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/area-privata-candidates/dashboard";

const index = () => {
    return (
        <>
            <Seo pageTitle="Area privata candidato" />
            <DashboadHome />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
