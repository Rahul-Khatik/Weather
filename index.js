// import request from "postman-request";
const request = require("postman-request");

const url =
  "https://api.weatherstack.com/current?access_key=753e1f187ae091aff7fc0147f374bb0b&query=20.754241,73.364273";
// const url = `https://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=37.8267,-122.4233`;

request({ url: url, json: true }, (error, res) => {
  // const data = JSON.parse(res.body);
  console.log("Current Temperature is ", res.body.current.temperature);
  console.log("Feels Like ", res.body.current.feelslike);
});
