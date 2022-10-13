var listBody = document.getElementById('fiveDayForecast');
var cityName = document.getElementById('searchInput');
var APIkey = '3b45717e6a5c57fe595a9f2361b3126b'

function getCurrentForecast(cityName) {
    var requestUrl = 'api.openweathermap.org/data/2.5/weather?q=' +cityName + '&appid=' +APIkey;
console.log(res);
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            //Loop over the data to generate a list
            

        })
}
