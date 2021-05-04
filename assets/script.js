var api_key = "8e9b5af2936a3833e42ad16b630a03a1";

var seekWord = document.querySelector("#form");

function submitSeek(e) {
  e.preventDefault();
  var city = document.querySelector("#city").value;
  var weatherLocaUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;

  fetch(weatherLocaUrl)
    .then((data) => data.json())
    .then(function (data) {
      // console.log(data);
      // showWeather(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var weatherNowUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`;

      fetch(weatherNowUrl).then((data) =>
        data.json().then(function (data) {
          // console.log(data);
          showWeather(data);
        })
      );
    });
}

seekWord.addEventListener("submit", submitSeek);

function showWeather(cityData) {
  var cityBtn = document.createElement("button");
  cityBtn.addEventListener("click", cityData);
  cityBtn.innerHTML = document.querySelector("#city").value;
  document.body.append(cityBtn);

  var displayOneDayWeather = document.querySelector("#current-city");
  var cityName = document.createElement("h1");
  cityName.innerHTML = `${city}`;
  displayOneDayWeather.append(cityName);
  // console.log(cityName);
  var todaysDate = moment().format("MMMM d, YYYY");
  displayOneDayWeather.append(todaysDate);
   var weatherIcon = document.createElement("img");
  weatherIcon.setAttribute("src", `http://api.openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
    // displayOneDayWeather.append(weatherIcon);
  var temp = document.createElement("h3");
  temp.innerHTML = "Temperture: " + cityData.current.temp;
  displayOneDayWeather.append(temp);
  var humidity = document.createElement("h3");
  humidity.innerHTML = "Humidity: " + cityData.current.humidity;
  displayOneDayWeather.append(humidity);
  var wind = document.createElement("h3");
  wind.innerHTML = "Wind Speed: " + cityData.current.wind_speed;
  displayOneDayWeather.append(wind);
  var UV = document.createElement("h3");
  UV.innerHTML = "UV index: " + cityData.current.uvi;
  displayOneDayWeather.append(UV);
}

function fiveDayResult(city) {
  var fiveDayWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=imperial`;

  fetch(fiveDayWeatherUrl)
    .then((data) => data.json())
    .then(function (forecast) {
      showWeather(forecast);
      console.log(forecast);
    });

  // var holdFiveDayWeather = document.querySelector("#future-searches");
  var fiveCardEl = document.createElement("card");
  fiveCardEl.setAttribute("src", fiveDayWeather);
  fiveDays.innerHTML = "";
  for (let i = 4; i < fiveDayWeather.length; i = i + 8)
    fiveDays.append(fiveCardEl);
  console.log(fiveCardEl);
}

// function saveCityWeather() {
//   localStorage.setItem(showWeather);
// }
// document.getElementById("#current-city").innerHTML = localStorage.saveCityWeather;