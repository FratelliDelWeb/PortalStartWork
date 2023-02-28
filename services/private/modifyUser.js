import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export async function modifyUser(editData, cookie) {
  const res = await axios.post(api + "/auth/modify", editData, {
    withCredentials: true,
    headers: {
      Cookie: { cookie },
    },
  });
  const data = await res.data;

  return data;
}
