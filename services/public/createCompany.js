import axios from "axios";

export async function createCompany(body) {
  debugger;
  await axios
    .post("/api/public/companies/create", body)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return new Error(err.response.data);
    });
}
