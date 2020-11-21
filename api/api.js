const axios = require("axios");

axios.get("https://covidnigeria.herokuapp.com/api")
    .then(data => module.exports = data.data)
    .catch(error => console.log(error));
