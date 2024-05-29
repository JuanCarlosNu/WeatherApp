const urlBase = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "4a4cfed1df974ccefdb2d87e31e01fec";

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Escriba bien el nombre de la ciudad");
  }
});

function fetchWeather(city) {
  fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then((data) => data.json())
    .then((data) => console.log(data));
}

function showWeatherData(data) {
  const divResponseData = document.getElementById("responseData");
  divResponseData.innerHTML = "";
  const cityName = data.name;
  const countryName = data.sys.country;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  const cityInfo = document.createElement("h2");
  cityInfo.textContent = `${cityName}, ${countryName}`;

  const tempInfo = document.createElement("p");
  tempInfo.textContent = `La temperatura es ${Math.floor(temp - diffKelvin)}ºC`;

  const humidityInfo = document.createElement("p");
  humidityInfo.textContent = `La humedad es de ${humidity}%`;

  const icoInfo = document.createElement("img");
  icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; //verificar en la docu cómo mostrar una imágen

  const descriptionInfo = document.createElement("p");
  descriptionInfo.textContent = `La descripción meteorológica es ${description}`;

  divResponseData.appendChild(cityInfo);
  divResponseData.appendChild(tempInfo);
  divResponseData.appendChild(humidityInfo);
  divResponseData.appendChild(icoInfo);
  divResponseData.appendChild(descriptionInfo);
}
