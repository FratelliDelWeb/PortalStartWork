import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getCandidateIdPrivate(id) {
  const res = await axios.get(api + "/candidates/" + id, {
    withCredentials: true,
  });
  const data = await res.data;

  return data;
}
