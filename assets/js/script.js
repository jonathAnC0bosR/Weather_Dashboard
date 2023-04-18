var apiKey = 'e02041905f5a14c5c120f521c211aa9b';
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey;
var inputEl = document.querySelector("#input-city");
var searchBtn = document.querySelector(".btn-el");
var city;

searchBtn.addEventListener('click', function(event) {
    event.preventDefault;
    city = inputEl.value;
    
})

// fetch(apiURL);

var isTrue = false;
fetch(isTrue ? 'endpoint' : './mock.json')
    .then 