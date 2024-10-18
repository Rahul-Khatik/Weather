import request from "postman-request";
const yargs = require("yargs");
const { fatchGeoLocation } = require("./geoLocation.js");

// const url = "https://api.weatherstack.com/current?access_key=753e1f187ae091aff7fc0147f374bb0b&query=20.754241,73.364273";
// const url = `https://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=37.8267,-122.4233`;
yargs
  .command({
    command: "current",
    discribe: "Cuurent Weather Data",
    builder: {
      city: {
        discribe: "Adding city",
        demandOption: true,
        type: "string",
      },
    },
    handler(args) {
      const city = args.city;
      console.log("Printing...");
      fatchGeoLocation(city);
    },
  })
  .parse();
