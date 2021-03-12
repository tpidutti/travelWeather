var api_key = "8e9b5af2936a3833e42ad16b630a03a1";
var baseurl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + api_key;

var seekWord = document.querySelector("#searchForm");


function submitSeek(event){
    event.preventDefault();
    var city = document.querySelector("#name-input").value;
    // console.log(city);
    var weatherNowUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    
    fetch(weatherNowUrl)
    .then((data) => data.json())
    .then(function (data) {
    showWeather(data);
    
    // console.log(data);

    // var lattitude = coord.lat;
    // var longitude = coord.lon;
    // var weatherUvUrl = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${api_key}`
    // fetch(weatherUvUrl)
    // .then(data => data.json()
    // .then(function (uv) {
    // console.log(weatherUvUrl);

    // }))

   
 
});
}
    seekWord.addEventListener("submit", submitSeek)

    function showWeather (cityData) { 
        // console.log(showWeather)

        var cityBtn = document.createElement("BUTTON");
        // cityBtn.addEventListener("click", )
        cityBtn.innerHTML = document.querySelector("#name-input").value;
        document.body.append(cityBtn);
 
        var displayOneDayWeather = document.querySelector("#displayWeather");
        var cityName = document.createElement("h1");
        cityName.innerHTML = cityData.name
        displayOneDayWeather.append(cityName)
        console.log(cityData)
        var todaysDate = moment().format("MMMM d, YYYY");
        displayOneDayWeather.append(todaysDate);
        // var temp = document.createElement("h3");
        // displayOneDayWeather.append(temp);
    }
    
    

// var fiveDayWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`
    
//     fetch(fiveDayWeatherUrl)
//     .then((data) => data.json())
//     .then(function (forecast) {
//     showWeather(forecast);
//     console.log(forecast);
//     });

// var fiveCardEl = document.createElement("card");
// fiveCardEl.setAttribute("src", fiveDayWeather);
// fiveDays.innerHTML = ""
// fiveDays.append(fiveCardEl)
// console.log(fiveCardEl);

// var weatherIcon = "http://api.openweathermap.org/img/wn/" + weather[0].icon + "@2x.png"
// var weatherIcon = baseurl.weather.id;
// displayOneDayWeather.append(weatherIcon);

