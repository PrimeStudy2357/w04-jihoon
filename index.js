const { default: axios } = require("axios");

axios.get("http://youtube.com/").then((res) => {
  console.log(res.data);
  console.log(res.status);
});
