import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export async function modifyJob(dataEdit, cookie) {
  const res = await axios.post(api + "/jobOffers/modify", dataEdit, {
    withCredentials: true,
    headers: {
      Cookie: { cookie },
    },
  });
  const data = await res.data;

  return data;
}
