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
            //Loop over the data to generate a list
            

        })
}
document.getElementById("cityInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    getCurrentForecast(event.target.value);
  }
});



// function getWeather() {
//   const apiKey = '3b45717e6a5c57fe595a9f2361b3126b';
//   const city = document.getElementById('cityInput').value;

//   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);

//       let weatherDiv = document.getElementById('weather');
//       weatherDiv.innerHTML = '';

//       for (let i = 0; i < data.list.length; i += 8) {
//         let date = new Date(data.list[i].dt_txt);
//         let temp = data.list[i].main.temp;
//         let humidity = data.list[i].main.humidity;
//         let wind = data.list[i].wind.speed;

//         let dayDiv = document.createElement('div');
//         dayDiv.innerHTML = `
//           <h2>${date.toLocaleDateString()}</h2>
//           <p>Temperature: ${temp} &deg;C</p>
//           <p>Humidity: ${humidity}%</p>
//           <p>Wind Speed: ${wind} m/s</p>
//         `;
//         weatherDiv.appendChild(dayDiv);
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
