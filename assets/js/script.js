var apiKey = "7480ece94207df9273b5b0658e1c7979";
var searchButton = document.getElementById('search-button');
var cityInput = document.getElementById('search-input').value;
var temperature = document.querySelector('.temperature');
var city = document.querySelector('.city');
var icon = document.querySelector('.icon');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.humidity');

var tempToday = document.getElementById('temp-today');
var iconToday = document.getElementById('icon-today');
var humidityToday = document.getElementById('hum-today');
var windToday = document.getElementById('wind-today');

var temp1 = document.getElementById('temp-1');
var icon1 = document.getElementById('icon-1');
var humidity1 = document.getElementById('hum-1');
var wind1 = document.getElementById('wind-1');

var temp2 = document.getElementById('temp-2');
var icon2 = document.getElementById('icon-2');
var humidity2 = document.getElementById('hum-2');
var wind2 = document.getElementById('wind-2');

var temp3 = document.getElementById('temp-3');
var icon3 = document.getElementById('icon-3');
var humidity3 = document.getElementById('hum-3');
var wind3 = document.getElementById('wind-3');

var temp4 = document.getElementById('temp-4');
var icon4 = document.getElementById('icon-4');
var humidity4 = document.getElementById('hum-4');
var wind4 = document.getElementById('wind-4');

var temp5 = document.getElementById('temp-5');
var icon5 = document.getElementById('icon-5');
var humidity5 = document.getElementById('hum-5');
var wind5 = document.getElementById('wind-5');

console.log(cityInput);
console.log("Hello World");

function getTodayTemp(cityInput) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

  fetch(apiUrl, {
    cache: "reload",
  })
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    city.textContent = data.city.name;
    tempToday.textContent = `${Math.floor(data.main.temp)} °C`;
    iconToday.setAttribute = ("src", `${data.weather[0].icon}@2x.png`);
    humidityToday.textContent = `${data.main.humidity}%`;
    windToday.textContent = `${data.wind.speed} km/h`;

    // localStorage.setItem(cityInput);
  })
};

function getForecast(cityInput) {
  
  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=${apiKey}`;
  
  
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      temp1.textContent = `${Math.floor(data.list[3].main.temp)} °C`;
      icon1.setAttribute = ("src", `${data.list[3].weather[0].icon}@2x.png`);
      humidity1.textContent = `${data.list[3].main.humidity}%`;
      wind1.textContent = `${data.list[3].wind.speed} km/h`;


      temp2.textContent = `${Math.floor(data.list[11].main.temp)} °C`;
      icon2.setAttribute = ("src", `${data.list[11].weather[0].icon}@2x.png`);
      humidity2.textContent = `${data.list[11].main.humidity}%`;
      wind2.textContent = `${data.list[11].wind.speed} km/h`;


      temp3.textContent = `${Math.floor(data.list[19].main.temp)} °C`;
      icon3.setAttribute = ("src", `${data.list[19].weather[0].icon}@2x.png`);
      humidity3.textContent = `${data.list[19].main.humidity}%`;
      wind3.textContent = `${data.list[19].wind.speed} km/h`;


      temp4.textContent = `${Math.floor(data.list[27].main.temp)} °C`;
      icon4.setAttribute = ("src", `${data.list[27].weather[0].icon}@2x.png`);
      humidity4.textContent = `${data.list[27].main.humidity}%`;
      wind4.textContent = `${data.list[27].wind.speed} km/h`;


      temp5.textContent = `${Math.floor(data.list[35].main.temp)} °C`;
      icon5.setAttribute = ("src", `${data.list[35].weather[0].icon}@2x.png`);
      humidity5.textContent = `${data.list[35].main.humidity}%`;
      wind5.textContent = `${data.list[35].wind.speed} km/h`;



    });
  
};

searchButton.addEventListener('click', getTodayTemp);
searchButton.addEventListener('click', getForecast);






// if (searchHistory.childNodes.length > 4) searchHistory.removeChild (searchHistory.firstChild);