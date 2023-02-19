
import axios from "axios";

export async function getjobOffers() {

      const res = await axios.get("http://localhost:3000/api/public/jobOffers");
      const data = await res.data;
      console.log(data)
    return data
  }