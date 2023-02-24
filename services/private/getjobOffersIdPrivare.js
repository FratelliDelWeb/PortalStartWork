import axios from "axios";
const api = process.env.API_ENDPOINT;
export async function getjobOfferIdPrivate(req, id) {
  const res = await axios.get(api + "/candidates/" + id, {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  const data = await res.data;

  return data;
}
