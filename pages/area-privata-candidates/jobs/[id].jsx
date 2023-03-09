import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "../../../components/common/Seo";
import Jobs from "../../../components/dashboard-pages/area-privata-candidates/jobs/index";
import axios from "axios";
import { getSession } from "next-auth/react";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await axios.get(api + "/jobOffers/" + id, {
    withCredentials: true,
  });
  const req = context.req;
  const session = await getSession({ req });
  const data = await res.data;
  return { props: { dataOL: data, session: session } };
}

const SingleCandidate = ({ dataOL, session }) => {
  const [idUser, setIdUser] = useState(session.user.user);
  const [interstedTo, setInterstedTo] = useState([]);
  const router = useRouter();
  const idJob = router.query.id;

  useEffect(() => {
    getListOfInterests();
  }, []);

  const getListOfInterests = async () => {
    const res = await axios({
      method: "post",
      url: api + "/candidates/" + idUser,
    });
    const data = await res.data;
    const intersted = data.interstedTo;
    setInterstedTo(intersted);
  };

  console.log("idUser", idUser);
  return (
    <>
      <Seo pageTitle="Lavoro" />
      <Jobs
        dataOL={dataOL}
        userinterstedTo={interstedTo}
        idCliente={idUser}
        idJob={idJob}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleCandidate), {
  ssr: false,
});
