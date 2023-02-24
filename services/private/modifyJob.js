import axios from "axios";
const api = process.env.API_ENDPOINT;
export async function modifyJob(dataEdit, cookie) {
  const res = await axios.post(api + "/uses/modify", dataEdit, {
    withCredentials: true,
    headers: {
      Cookie: { cookie },
    },
  });
  const data = await res.data;

  return data;
}
