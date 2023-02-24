import axios from "axios";

export async function getjobOffers() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/public/jobOffers`);
  const data = await res.data;
  return data;
}
