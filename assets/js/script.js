var apiKey = "92cda7aaefe06d3ad7109cffb8982fcf";
var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
var fetchButton = document.getElementById('search-button');

var temperature = document.querySelector('.temperature');
var city = document.querySelector('.city');
var icon = document.querySelector('.icon');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);

