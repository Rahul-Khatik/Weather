// import request from "postman-request";
const request = require("postman-request");
const yargs = require("yargs");

// const url =
//   "https://api.weatherstack.com/current?access_key=753e1f187ae091aff7fc0147f374bb0b&query=20.754241,73.364273";
// const url = `https://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=37.8267,-122.4233`;

// yargs.command({
//   command: "add",
//   discribe: "Add your city",
//   builer: {
//     city: {
//       discribe: "Adding city",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler(args) {
//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${args.city}&key=01262bff26a94a40b46522c4145f4c0a`;
//     console.log(Hello);

//     request({ url: url, json: true }, (error, res) => {
//       const data = JSON.parse(res.body);
//       console.log(data);
//       // console.log("Current Temperature is ", res.body.current.temperature);
//       // console.log("Feels Like ", res.body.current.feelslike);
//     });
//   },
// });

yargs.command({
  command: "current",
  discribe: "Cuurent Weather Data",
  handler() {
    // const url = `https://api.opencagedata.com/geocode/v1/json?q=surat&key=01262bff26a94a40b46522c4145f4c0a`;
    // console.log(Hello);

    // request({ url: url, json: true }, (error, res) => {
    //   const data = JSON.parse(res.body);
    //   console.log(data);
    //   // console.log("Current Temperature is ", res.body.current.temperature);
    //   // console.log("Feels Like ", res.body.current.feelslike);
    // });
    console.log("Printing...");
  },
});
