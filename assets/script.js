var api_key = "8e9b5af2936a3833e42ad16b630a03a1";
var baseurl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + api_key;

var seekWord = document.querySelector("#searchForm");

function submitSeek(event){
    event.preventDefault();
    var city = document.querySelector("#name-input").value;
    console.log(city);
    var weatherNowUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    
    fetch(weatherNowUrl)
    .then((data) => data.json())
    .then(function (data) {
    showWeather(data);
    console.log(data);
    //make the boxes with our weather data
var fiveDays = document.createElement("card");
fiveDays.innerHTML = document.querySelector("#fiveDay").value;
console.log(fiveDays);

    });
}

seekWord.addEventListener("submit", submitSeek)

function showWeather (cityData) { 
    console.log("showWeather")

    var cityBtn = document.createElement("BUTTON");
    cityBtn.innerHTML = document.querySelector("#name-input").value;
    document.body.append(cityBtn);
    console.log(cityBtn)

    var displayOneDayWeather = document.querySelector("#displayWeather");
    var cityName = document.createElement("h1");
    cityName.innerHTML = cityData.name
    displayOneDayWeather.append(cityName)
    var todaysDate = moment().format("MMMM d, YYYY");
    displayOneDayWeather.append(todaysDate);
    // var weatherIcon = `http://openweathermap.org/img/wn/10d@2x.png`;
    // var weatherIcon = baseurl.weather.id;
    // displayOneDayWeather.append(weatherIcon);
//    populate todays weather information from submitSeek function?
    console.log(cityData)

}






// var lattitude = #.coord.lat;
// var longitude = #.coord.lon;
// `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${api_key}`

// var allWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${api_key}`
// fetch(allWeatherUrl)
// .then((data) => data.json())
// .then(function (data){
//     console.log(data);
// });

// 5 day forcast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

