import axios from "axios";

export async function createCandidate(body) {
  console.log(body);
  debugger;
  axios
    .post("http://localhost:3000/api/public/candidates/create", body)
    .then((res) => {
      console.log("res", res.data);
    })
    .catch((err) => {
      console.log("error in request", err.response.data);
    });
}
