import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export async function getCandidatesPrivate(req) {
  const res = await axios.get(api + "/candidates", {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  const data = await res.data;

  return data;
}
