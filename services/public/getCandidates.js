import axios from "axios";
const api = process.env.API_ENDPOINT;
export async function getCandidates() {
  const res = await axios.get(api + "/public/candidates");
  const data = await res.data;
  return data;
}
