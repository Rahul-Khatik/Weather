const request = require("postman-request");

function fatchGeoLocation(city) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=01262bff26a94a40b46522c4145f4c0a`;
  request({ url: url, json: true }, (error, res) => {
    if (error) {
      console.log("Unable to connect to weather Service!");
    } else if (res.body.error) {
      console.log("Unable to find location");
    } else {
      console.log(res.body.results[0].geometry);
      const lat = res.body.results[0].geometry.lat;
      const lng = res.body.results[0].geometry.lng;
      fetchWeatherData(lat, lng);
    }
  });
}

const fetchWeatherData = (lat, lng) => {
  const url = `https://api.weatherstack.com/current?access_key=753e1f187ae091aff7fc0147f374bb0b&query=${lat},${lng}`;
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      console.log("Unable to connect to weather Service!");
    } else if (res.body.error) {
      console.log("Unable to find location");
    } else {
      console.log(res.body);
    }
  });
};

module.exports = {
  fatchGeoLocation: fatchGeoLocation,
  fetchWeatherData: fetchWeatherData,
};
