import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home9 from "../components/home-9";
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/candidates');
  const data = await res.json();

  return{props:{dataCL : data}}
}
const index = ({dataCL}) => {
  return (
    <>
      <Seo pageTitle="Home-9" />
      <Home9 dataCL = {dataCL} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
