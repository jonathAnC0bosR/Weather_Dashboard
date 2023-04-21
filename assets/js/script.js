var apiKey = 'e02041905f5a14c5c120f521c211aa9b';
var queryURL;

//DOM ELEMENTS
var inputEl = document.querySelector('#input-city');
var searchBtn = document.querySelector('.btn-el');

var getCityCoordenates = function(city) {
    var city = inputEl.value.trim();
    queryURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    fetch(queryURL)
    .then.

}

var getCityData = function(lat, lon) {

}

searchBtn.addEventListener('click', getCityCoordenates);