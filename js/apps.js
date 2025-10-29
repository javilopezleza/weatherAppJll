// HTML text

//Containers
const weatherInfo = document.getElementById("weather-info");
const weatherInfoElement = document.getElementById("weather-info");
//Search
const input = document.getElementById("city-search");
const inputValue = input.value;
//City
const cityName = document.getElementById("city-name");
const cityCoords = document.getElementById("coords");
//Temperature
const temperature = document.getElementById("temp");
const feelsLike = document.getElementById("feels_like");
const minTemp = document.getElementById("min_temp");
const maxTemp = document.getElementById("max_temp");
// Wind
const windSpeed = document.getElementById("wind-speed");
const windGust = document.getElementById("wind-gust");
//conditions
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");




async function getWeather(city) {
  const response = await fetch(`/.netlify/functions/getWeather?city=${city}`);
  const data = await response.json();
  weatherInfo.style.display = "block"
  setData(data);

  weatherInfoElement.classList.add("visible");
}



document.querySelector("#search-btn").addEventListener("click", () => {
  const city = document.querySelector("#city-search").value;
  getWeather(city);
});


async function setData(data) {
  cityName.textContent = `${data.name} - ${data.sys.country}`;
  cityCoords.textContent = `Lon: ${data.coord.lon}, Lat: ${data.coord.lat}`;
  temperature.textContent = `${data.main.temp}°C`;
  feelsLike.textContent = `${data.main.feels_like}°C`;
  minTemp.textContent = `${data.main.temp_min}°C`;
  maxTemp.textContent = `${data.main.temp_max}°C`;
  windSpeed.textContent = `${data.wind.speed}`;
  windGust.textContent = `${data.wind.gust}`;
  pressure.textContent = `${data.main.pressure}`;
  humidity.textContent = `${data.main.humidity}`;
  weather.textContent = `${data.weather[0].main} - ${data.weather[0].description}`;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.src = iconUrl;
}