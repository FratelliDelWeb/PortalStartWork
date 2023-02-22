import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import Jobs from "../../../components/dashboard-pages/area-privata-candidates/jobs/index";
import axios from "axios";


export async function getServerSideProps(context) {
  const  id  = context.query.id;
  const cookieSend = context.req.headers.cookie;
  const res = await axios.get("http://localhost:3000/api/jobOffers/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataOL: data,cookie: cookieSend  } };
}


function setIdUser(){
  const [idUser,setIdUser] = useState();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    setIdUser(token) 
    console.log(idUser);
    
  },[token]);
  return idUser;
  }




const SingleCandidate = ({dataOL ,cookie}) => {
  const id = setIdUser();
  console.log(id)


  return (
    <>
      <Seo pageTitle="Lavoro" />
      <Jobs dataOL = {dataOL} userId={id} cookieSend= {cookie}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
