function getLatandLong () {
    var cityName = document.getElementById("cityName").value // replace by user uinput -- value/doc getelementby id . val or document
    var requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=b928000f7bd3baf95bd741e8c01b8813`
    fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var lat = data[0].lat
    var lon = data[0].lon
    fetchForecast(lat,lon)
  });

}


function fetchForecast (lat,lon){
    var requestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b928000f7bd3baf95bd741e8c01b8813`
    fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    showForecast(data)

});


}
// create geoweather map account - replace {api key} with my 

function showForecast (data){
    //document.getElementById("test").textContent = ""

    //for loop - 5 days 
    // day 1 
    // var day1 = data.list[0]
    var cardDiv = document.createElement('div')
    var dateHeading = document.createElement("h4")
    // dateHeading.textContent = day1.dt_txt
    cardDiv.appendChild(dateHeading)

    var temp = document.createElement("h4")
    cardDiv.appendChild(temp)

    // adding card to html
    document.getElementById("forecast").appendChild(cardDiv)

}

document.getElementById("search").addEventListener('click', getLatandLong)


// local storage - get value ans set item , save it as a string, on landing -  save as a rrange of string - convert strings to buttons - landing page 
function getHistoryList (){

}

function  savedCitytoLocalStorage(){

}

//document.createelement 
