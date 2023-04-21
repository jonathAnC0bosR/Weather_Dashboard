var apiKey = 'e02041905f5a14c5c120f521c211aa9b';

//DOM ELEMENTS
var inputEl = document.querySelector('#input-city');
var searchBtn = document.querySelector('.btn-el');
var bigCardEl = document.querySelector('.big-card')

var handleFormSubmit = function(event) {
    event.preventDefault();
    var city = inputEl.value.trim();

    if (city) {
         getCityCoordenates(city);
        console.log(city);
    } else {
        alert('Please enter a city');
    }
}

var getCityCoordenates = function(city) {
    var queryUrl =  'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=imperial';
    fetch(queryUrl)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeatherCards(data.list)
                })
            } else { 
                alert('Error' + response.statusText);
            }
        }).catch(function(error){
            alert('Unable to connect to Weather Server');
        })
}

var displayWeatherCards = function(data) {
    if(data === 0) {
        alert("There's no data for this city, sorry");
        return;
    } 
    var today = dayjs();
    console.log();
    var dateEl = document.createElement('h2');
    var titleEl = document.createElement('h1');
    dateEl.textContent = today.format('DD-MMM-YY');
    dateEl.classList = 'date';
    titleEl.textContent = inputEl.value;
    bigCardEl.appendChild(titleEl);
    bigCardEl.appendChild(dateEl);
    

    
    console.log(data[0]);
    for(var i = 0; i < data.length; i+=8) {
        console.log(data[i]);
        
    }

    // bigCardEl.textContent = inputEl.value.trim();

    

    

}

searchBtn.addEventListener('click', handleFormSubmit);