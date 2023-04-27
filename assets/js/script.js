var apiKey = 'e02041905f5a14c5c120f521c211aa9b';

//DOM ELEMENTS
var inputEl = document.querySelector('#input-city');
var searchBtn = document.querySelector('.btn-el');
var bigCardEl = document.querySelector('#big-card');


var handleFormSubmit = function(event) {
    event.preventDefault();
    var city = inputEl.value.trim();
    bigCardEl.textContent = '';
    if (city) {
         getCityCoordenates(city);
         getCurrentWeather(city);
        console.log(city);
    } else {
        alert('Please enter a city');
    }
}

var getCurrentWeather = function(city) {
    let currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+ apiKey + '&units=imperial';
    fetch(currentWeatherUrl)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    displayCurrentWeather(data);
                    console.log(data);
                })
            }
        })
}


var getCityCoordenates = function(cityParameter) {
    var queryUrl =  'https://api.openweathermap.org/data/2.5/forecast?q=' + cityParameter + '&appid=' + apiKey + '&units=imperial';
    fetch(queryUrl)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    displayWeatherCards(data);
                    console.log(data);
                })
            } else { 
                alert('Error' + response.statusText);
            }
        }).catch(function(error){
            alert('Unable to connect to Weather Server');
        })
}

var displayCurrentWeather = function(currentWeather) {
    
    var today = dayjs().format('DD-MMM-YY');
    var titleEl = document.createElement('h1');
    

    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');

    tempEl.textContent = 'Temp: ' + currentWeather.main.temp + ' °F';
    windEl.textContent = 'Wind: ' + currentWeather.wind.speed + ' MPH';
    humidityEl.textContent = 'Humidity: ' + currentWeather.main.humidity + ' %';
    titleEl.textContent = inputEl.value + ' ' + '(' + today + ')';

   if(currentWeather.weather[0].main === "Clouds") {
       
        let cloudsIcon = document.createElement('í');
        cloudsIcon.style.color = '#302ae5';
        cloudsIcon.classList.add('fa-cloud-sun', 'fa-xl', 'fa-solid');
        titleEl.append(cloudsIcon);
        
   }  else if(currentWeather.weather[0].main === "Clear") {
        
        let clearIcon = document.createElement('í');
        clearIcon.style.color = '#c6de17';
        clearIcon.classList.add('fa-solid', 'fa-sun', 'fa-xl');
        titleEl.append(clearIcon);

   } else if(currentWeather.weather[0].main === "Drizzle") {

        let drizzleIcon = document.createElement('í');
        drizzleIcon.style.color = '#255ec1';
        drizzleIcon.classList.add('fa-solid', 'fa-cloud-rain');
        titleEl.append(drizzleIcon);

   } else if (currentWeather.weather[0].main === "Mist") {
        
        let mistIcon = document.createElement('í');
        mistIcon.style.color = '#315d68';
        mistIcon.classList.add('fa-solid', 'fa-cloud');
        titleEl.append(mistIcon);

   }
   
    bigCardEl.append(titleEl, tempEl, windEl, humidityEl);
    bigCardEl.classList = 'big-card';
}

var displayWeatherCards = function(weather) {
    if(weather === 0) {
        alert("There's no data for this city, sorry");
        return;
    } 
    // var today = dayjs();
    // var titleEl = document.createElement('h1');
    // titleEl.textContent = inputEl.value + ' ' + '(' +today.format('DD-MMM-YY') + ')';
    // bigCardEl.appendChild(titleEl);
    // bigCardEl.classList = 'big-card';
    // var todayTemp = weather.list[2].main.temp;
    // var todayWind = weather.list[2].wind.speed;
    // var todayHumidity = weather.list[2].main.humidity;
    // var todayTempEl = document.createElement('p');
    // var todayWindEl = document.createElement('p');
    // var todayHumidityEl = document.createElement('p');
    // todayWindEl.textContent = 'Wind speed: ' + todayWind + ' MPH';
    // todayTempEl.textContent = 'Temp: ' + todayTemp + ' °F';
    // todayHumidityEl.textContent = 'Humidity: ' + todayHumidity + ' %';
    // bigCardEl.append(todayTempEl);
    // bigCardEl.append(todayWindEl);
    // bigCardEl.append(todayHumidityEl);
    

    
    console.log(weather.list[0]);
    for(var i = 0; i < weather.list.length; i+=8) {
        console.log(weather.list[i]);
        
    }

    // bigCardEl.textContent = inputEl.value.trim();

    

    

}

searchBtn.addEventListener('click', handleFormSubmit);