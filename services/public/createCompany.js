import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
export async function createCompany(body) {
  debugger;
  await axios
    .post(api + "/public/companies/create", body)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return new Error(err.response.data);
    });
}
