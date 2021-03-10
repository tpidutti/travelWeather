var seekWord = document.querySelector("#searchForm");

function submitSeek(event){
    event.preventDefault();
    var seekDisplay=document.querySelector("#name-input").nodeValue;
    console.log(seekDisplay);
}

seekWord.addEventListener("sumbit", submitSeek)

var api_key = "8e9b5af2936a3833e42ad16b630a03a1";

var baseurl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + api_key;

// console.log(baseurl);

var city = document.querySelector("#name-input");

function showWeatherNow (city) { 
    var weatherNowUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    fetch(weatherNowUrl)
    .then((date) => data.jason())
    .then(function () {
    console.log();
    });
}



// var allWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${api_key}`
