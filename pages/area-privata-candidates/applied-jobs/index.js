import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AppliedJobs from "../../../components/dashboard-pages/area-privata-candidates/applied-jobs";
import { useEffect, useState } from "react";
import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
import { getjobOffersPrivate } from "../../../services/private/getjobOffersPrivate";
import { getSession } from "next-auth/react";

export async function getServerSideProps({ req }) {
  const data = await getjobOffersPrivate(req);
  const cookie = await req.headers.cookie;
  const session = await getSession({req})
  return { props: { dataOL: data, cookieSend: cookie ,idCandidato : session.user.user} };
}

function setIdUser() {
  const [idUser, setIdUser] = useState();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    setIdUser(token);
    console.log(idUser);
  }, [token]);
  return idUser;
}

const index = ({ dataOL, cookieSend ,idCandidato }) => {
  const [userinterstedTo, setinterstedTo] = useState([""]);
  const [idUser, setIdUser] = useState(idCandidato);
  console.log(idUser);

  useEffect(() => {
    if (idUser) {
      addArrayUser(idUser);
    }
  }, [idUser]);

  const addUserInterstedTo = async (idCliente) => {
    const res = await axios({
      method: "post",
      url: api + "/candidates/" + idCliente,
      headers: { Cookie: { cookieSend } },
    });
    const data = await res.data;

    const interted = data?.interstedTo;
    console.log(interted)
    return interted;
  };

  const addArrayUser = async (idCliente) => {
    setinterstedTo(await addUserInterstedTo(idCliente));

    console.log(userinterstedTo);
  };

  return (
    <>
      <Seo pageTitle="CANDIDATURE EFFETTUATE" />
      <AppliedJobs dataOL={dataOL} userinterstedTo={userinterstedTo} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
