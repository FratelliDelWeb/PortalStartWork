
import axios from "axios";

export async function modifyJob(dataEdit,cookie ) {

  const res = await axios.post("/api/users/modify" , dataEdit ,{
    withCredentials: true,
    headers: {
      Cookie: {cookie}
    }

  });
  const data = await res.data;

    return data
  }