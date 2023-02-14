let dataEx = [];

fetch("http://localhost:3000/api/canidati")
.then((response) => response.json())
.then((data) => {

  dataEx = data;
  console.log(dataEx);
})
.catch((err) => err);

module.exports = [dataEx] 