import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export async function getjobOffersPrivate() {
  const res = await axios.get(api + "/jobOffers", {
    withCredentials: true,
  });
  const data = await res.data;
  return data;
}
