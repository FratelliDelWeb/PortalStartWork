import axios from "axios";

export async function getCandidates() {
  const res = await axios.get("http://localhost:3000/api/public/candidates");
  const data = await res.data;
  return data;
}
