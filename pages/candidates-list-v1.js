import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import CandidatesListV1 from "../components/candidates-listing-pages/candidates-list-v1";
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/candidates');
    const data = await res.json();
 
    return{props:{dataCL : data}}
}
const index = ({dataCL}) => {

    console.log(dataCL)
    return (
        <>
            <Seo pageTitle="Candidates List V1" />
            <CandidatesListV1 dataCL = {dataCL} />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
