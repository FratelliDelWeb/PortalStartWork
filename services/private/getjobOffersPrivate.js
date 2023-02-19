
import axios from "axios";

export async function getjobOffersPrivate(req) {

  const res = await axios.get("http://localhost:3000/api/jobOffers", {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  const data = await res.data;
    return data
  }