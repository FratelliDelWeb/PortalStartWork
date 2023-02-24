import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import UsersProfile from "../../../components/dashboard-pages/area-privata/users-profile";
import axios from "axios";
import React, { useState, useEffect } from "react";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getServerSideProps({ req, resolvedUrl }) {
  const _id = resolvedUrl.substring(resolvedUrl.lastIndexOf("/") + 1);
  const res = await axios.get(api + "/users/" + _id, {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { dataCL: data } };
}

const index = ({ dataCL }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (!dataCL) <h1>Loading...</h1>;
    else setUser(dataCL);
    console.log(user);
    return () => {};
  }, [dataCL]);

  return (
    <>
      <Seo pageTitle="Profilo" />
      <UsersProfile user={user} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
