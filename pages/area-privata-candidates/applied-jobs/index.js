import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AppliedJobs from "../../../components/dashboard-pages/area-privata-candidates/applied-jobs";
import { useEffect, useState } from "react";
import axios from "axios";
const api = process.env.API_ENDPOINT;
import { getjobOffersPrivate } from "../../../services/private/getjobOffersPrivate";

export async function getServerSideProps({ req }) {
  const data = await getjobOffersPrivate(req);
  const cookie = await req.headers.cookie;
  return { props: { dataOL: data, cookieSend: cookie } };
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

const index = ({ dataOL, cookieSend }) => {
  const [userinterstedTo, setinterstedTo] = useState([""]);
  const id = setIdUser();
  console.log(id);

  useEffect(() => {
    if (id) {
      addArrayUser(id);
    }
  }, [id]);

  const addUserInterstedTo = async (idCliente) => {
    const res = await axios({
      method: "post",
      url: api + "/candidates/" + idCliente,
      headers: { Cookie: { cookieSend } },
    });
    const data = await res.data;

    const interted = data.interstedTo;
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
