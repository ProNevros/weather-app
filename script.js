var listBody = document.getElementById('fiveDayForecast');
var cityName = document.getElementById('cityInput');
const apiKey = '3b45717e6a5c57fe595a9f2361b3126b'

function getCurrentForecast(cityName) {
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
  // console.log(res);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      const firstDay = data.list.splice(0,1)[0]
      const firstDayDiv = buildDayDiv(firstDay)
      document.querySelector('#currentForcast').appendChild(firstDayDiv)

      //Loop over the data to generate a list
        for (let day of data.list.slice(0,5)) {
          const div = buildDayDiv(day)
          document.querySelector('#fiveDayForecast').appendChild(div)
        }

    })
}

function getWeather(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  const city = document.getElementById("cityInput").value;
  getCurrentForecast(city); // Call getCurrentForecast with the city input value
}

function buildDayDiv(day) {
  const dayDiv = document.createElement("div");
  dayDiv.classList.add ('castCard')

  const temp = document.createElement("p");
  temp.textContent = `Temperature: ${day.main.temp} °F`;
  dayDiv.appendChild(temp);

  const windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind Speed: ${day.wind.speed} mph`;
  dayDiv.appendChild(windSpeed);

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${day.main.humidity}%`;
  dayDiv.appendChild(humidity);

  return dayDiv;
}