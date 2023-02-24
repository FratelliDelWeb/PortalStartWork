import axios from "axios";
const api = process.env.API_ENDPOINT;

export async function getCandidateIdPrivate(context, id) {
  const res = await axios.get(api + "/candidates/" + id, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const data = await res.data;

  return data;
}
