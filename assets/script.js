var api_key = "8e9b5af2936a3833e42ad16b630a03a1";
// var baseurl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + api_key;

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

    // we now make the boxes with our weather data

    });
}

seekWord.addEventListener("submit", submitSeek)

function showWeather (cityData) { 
    console.log("showWeather")

    //where you do the html stuff dynamically
   
}



// var lattitude = #.coord.lat;
// var longitude = #.coord.lon;
// var allWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${api_key}`

// fetch(allWeatherUrl)
// .then((data) => data.json())
// .then(function (data){
//     console.log(data);
// });
