var apiKey = 'e02041905f5a14c5c120f521c211aa9b';

//DOM ELEMENTS
var inputEl = document.querySelector('#input-city');
var searchBtn = document.querySelector('.btn-el');
var bigCardEl = document.querySelector('.big-card')

var handleFormSubmit = function(event) {
    event.preventDefault();
    var city = inputEl.value.trim();
    bigCardEl.textContent = '';
    if (city) {
         getCityCoordenates(city);
        console.log(city);
    } else {
        alert('Please enter a city');
    }
}

var getCityCoordenates = function(cityParameter) {
    var queryUrl =  'https://api.openweathermap.org/data/2.5/forecast?q=' + cityParameter + '&appid=' + apiKey + '&units=imperial';
    fetch(queryUrl)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    displayWeatherCards(data);
                })
            } else { 
                alert('Error' + response.statusText);
            }
        }).catch(function(error){
            alert('Unable to connect to Weather Server');
        })
}

var displayWeatherCards = function(weather) {
    if(weather === 0) {
        alert("There's no data for this city, sorry");
        return;
    } 
    var today = dayjs();
    var dateEl = document.createElement('h2');
    var titleEl = document.createElement('h1');
    dateEl.textContent = today.format('DD-MMM-YY');
    titleEl.classList = 'date';
    dateEl.classList = 'appendedtitle';
    titleEl.textContent = inputEl.value;
    titleEl.appendChild(dateEl);
    bigCardEl.appendChild(titleEl);
    var todayTemp = weather.list[0].main.temp;
    console.log(todayTemp);
    var todayWind = weather.list[0].wind.speed;
    var todayTempEl = document.createElement('p');
    todayTempEl.textContent = 'Todays temp: ' + todayTemp + ' °F';
    titleEl.append(todayTempEl);
    
    
    

    
    console.log(weather.list[0]);
    for(var i = 0; i < weather.length; i+=8) {
        console.log(data[i]);
        
    }

    // bigCardEl.textContent = inputEl.value.trim();

    

    

}

searchBtn.addEventListener('click', handleFormSubmit);