export async function createCandidate(candidate) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(candidate),
  };
  try {
    await fetch("http://localhost:3000/api/candidates/create", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (e) {
    console.log(e);
  }
}
