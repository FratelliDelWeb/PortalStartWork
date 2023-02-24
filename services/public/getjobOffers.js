import axios from "axios";
const api = process.env.API_ENDPOINT;
export async function getjobOffers() {
  const res = await axios.get(api + "/public/jobOffers");
  const data = await res.data;
  return data;
}
