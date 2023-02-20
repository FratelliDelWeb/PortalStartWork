
import axios from "axios";

export async function getCandidateIdPrivate(context , id ) {

  const res = await axios.get("http://localhost:3000/api/candidates/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },

  });
  const data = await res.data;

    return data
  }