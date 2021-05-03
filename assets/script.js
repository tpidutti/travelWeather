var api_key = "8e9b5af2936a3833e42ad16b630a03a1";
var baseurl =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + api_key;

var seekWord = document.querySelector("#form");

function submitSeek(e) {
  e.preventDefault();
  var city = document.querySelector("#city").value;
  var weatherNowUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;

  fetch(weatherNowUrl)
    .then((data) => data.json())
    .then(function (data) {
    //   console.log(data);
      showWeather(data);
    });

  var lat = data.coord.lat;
  var lon = data.coord.lon;
  var weatherUvUrl = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${api_key}`;

  fetch(weatherUvUrl)
  .then((data) => data.json()
  .then(function (uv) {
      console.log(data);
    })
  );
}

seekWord.addEventListener("submit", submitSeek);

function showWeather(cityData) {
  var cityBtn = document.createElement("button");
  cityBtn.addEventListener("click", cityData);
  cityBtn.innerHTML = document.querySelector("#city").value;
  document.body.append(cityBtn);

  var displayOneDayWeather = document.querySelector("#current-city");
  var cityName = document.createElement("h1");
  cityName.innerHTML = cityData.name;
  displayOneDayWeather.append(cityName);
  var todaysDate = moment().format("MMMM d, YYYY");
  displayOneDayWeather.append(todaysDate);
  var temp = document.createElement("h3");
  temp.innerHTML = "temp" + cityData.main.temp;
  displayOneDayWeather.append(temp);
  var humidity = document.createElement("h3");
  humidity.innerHTML = "humidity" + cityData.main.humidity;
  displayOneDayWeather.append(humidity);
  var wind = document.createElement("h3");
  wind.innerHTML = "wind speed" + cityData.wind.speed;
  displayOneDayWeather.append(wind);
  var UV = document.createElement("h3");
  UV.innerHTML = "UV" + cityData.main.UV;
  displayOneDayWeather.append(UV);
}

function fiveDayResult(city) {
  var fiveDayWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;

  fetch(fiveDayWeatherUrl)
    .then((data) => data.json())
    .then(function (forecast) {
      showWeather(forecast);
      console.log(forecast);
    });

  var fiveCardEl = document.createElement("card");
  fiveCardEl.setAttribute("src", fiveDayWeather);
  fiveDays.innerHTML = "";
  fiveDays.append(fiveCardEl);
  console.log(fiveCardEl);

  var weatherIcon =
    "http://api.openweathermap.org/img/wn/" + weather[0].icon + "@2x.png";
  var weatherIcon = baseurl.weather.id;
  displayOneDayWeather.append(weatherIcon);
}
