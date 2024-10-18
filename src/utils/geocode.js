// const request = require("request");

// // const geocode = (address, callback) => {
// //   const url = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=01262bff26a94a40b46522c4145f4c0a`;

// //   request({ url, json: true }, (error, { body } = {}) => {
// //     console.log(body);
// //     if (error) {
// //       callback("Unable to connect to location services!", undefined);
// //     } else if (body.error) {
// //       callback("Unable to find location. Try another search.", undefined);
// //     } else {
// //       callback(undefined, {
// //         latitude: body.results[0].lat,
// //         longitude: body.results[0].lng,
// //         location: body.results[0].geometry,
// //       });
// //     }
// //   });
// // };

// function geocode(city, callback) {
//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=01262bff26a94a40b46522c4145f4c0a`;
//   request({ url: url, json: true }, (error, res) => {
//     if (error) {
//       callback("Unable to connect to weather Service!");
//     } else if (res.body.error) {
//       callback("Unable to find location");
//     } else {
//       const add = res.body.results[0].geometry;
//       const lat = res.body.results[0].geometry.lat;
//       const lng = res.body.results[0].geometry.lng;
//       return forecasts(lat, lng, add);
//     }
//   });
// }

// function forecasts(lat, lng, add) {
//   const url = `https://api.weatherstack.com/current?access_key=753e1f187ae091aff7fc0147f374bb0b&query=${lat},${lng}`;
//   request({ url: url, json: true }, (err, res) => {
//     if (err) {
//       return "Unable to connect to weather Service!";
//     } else if (res.body.error) {
//       return "Unable to find location";
//     } else {
//       console.log(res.body);
//       return res.body.location.name + " Hello World";
//     }
//   });
// }

// module.exports = {
//   geocode,
//   forecasts,
// };

const request = require("request");

function geocode(city, callback) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=01262bff26a94a40b46522c4145f4c0a`;

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to weather Service!", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        latitude: res.body.results[0].geometry.lat,
        longitude: res.body.results[0].geometry.lng,
        location: res.body.results[0].formatted,
      });
    }
  });
}

function forecasts(latitude, longitude, callback) {
  const url = `https://api.weatherstack.com/current?access_key=753e1f187ae091aff7fc0147f374bb0b&query=${latitude},${longitude}`;

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to weather Service!", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(res.body.current.temperature);
      console.log(res.body.current.weather_descriptions[0]);
      console.log(res.body.current.feelslike);
      console.log(res.body.current.humidity);
      callback(undefined, {
        location: res.body.location.name,
        temperature: res.body.current.temperature,
        description: res.body.current.weather_descriptions[0],
        feelslike: res.body.current.feelslike,
        humidity: res.body.current.humidity,
      });
    }
  });
}

module.exports = {
  geocode,
  forecasts,
};
