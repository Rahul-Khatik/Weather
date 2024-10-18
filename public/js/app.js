console.log("Client side javascript file is loaded!");
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const locationElement = document.getElementById("location");
const forecastElement = document.getElementById("forecast");
const temperatureElement = document.getElementById("temperature");
const feelsLikeElement = document.getElementById("feels-like");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");
const observationTimeElement = document.getElementById("observation-time");
const detailsDiv = document.getElementById("details");

// Hide the weather info initially
document.getElementById("weather-info").style.display = "none";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  // Clear previous results and show loading message
  locationElement.textContent = "Loading...";
  forecastElement.textContent = "";
  detailsDiv.style.display = "none";

  // Show the weather info div
  document.getElementById("weather-info").style.display = "block";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        locationElement.textContent = data.error;
        detailsDiv.style.display = "none";
      } else {
        locationElement.textContent = data.location;
        forecastElement.textContent = data.forecast.description;
        temperatureElement.textContent = `Temperature: ${data.forecast.temperature}°C`;
        feelsLikeElement.textContent = `Feels like: ${data.forecast.feelslike}°C`;
        humidityElement.textContent = `Humidity: ${data.forecast.humidity}%`;
        windSpeedElement.textContent = `Wind Speed: ${data.forecast.wind_speed} km/h`;
        observationTimeElement.textContent = `Observation Time: ${data.forecast.observation_time}`;
        detailsDiv.style.display = "block";
      }
    });
  });
});
