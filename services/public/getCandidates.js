import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export async function getCandidates() {
  const res = await axios.get(api + "/public/candidates");
  const data = await res.data;
  return data;
}
