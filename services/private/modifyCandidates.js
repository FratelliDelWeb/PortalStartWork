import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export async function modifyCandidates(editData, cookie) {
  debugger
 
    const res = await axios.post(api + "/candidates/modify", editData, {
      withCredentials: true,
      headers: {
        Cookie: { cookie },
      },
    });
    const data = await res.data;
  
    return data;
 
  console.log("error")
 
}
