import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import Jobs from "../../../components/dashboard-pages/area-privata-candidates/jobs/index";
import axios from "axios";
const api = process.env.API_ENDPOINT;

export async function getServerSideProps(context) {
  const id = context.query.id;
  const cookieSend = context.req.headers.cookie;
  const res = await axios.get(api + "/jobOffers/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataOL: data, cookie: cookieSend } };
}

function setIdUser() {
  const [idUser, setIdUser] = useState();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    setIdUser(token);
  }, [token]);
  return idUser;
}

const SingleCandidate = ({ dataOL, cookie }) => {
  const [userinterstedTo, setinterstedTo] = useState([""]);
  const id = setIdUser();

  useEffect(() => {
    if (id) {
      addArrayUser(id);
    }
  }, [id]);

  const addUserInterstedTo = async (idCliente) => {
    const res = await axios({
      method: "post",
      url: api + "/candidates/" + idCliente,
      headers: { Cookie: { cookie } },
    });
    const data = await res.data;

    const interted = data.interstedTo;
    return interted;
  };

  const addArrayUser = async (idCliente) => {
    setinterstedTo(await addUserInterstedTo(idCliente));
  };

  return (
    <>
      <Seo pageTitle="Lavoro" />
      <Jobs
        dataOL={dataOL}
        userinterstedTo={userinterstedTo}
        cookieSend={cookie}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
