var displayInput = document.getElementById("display-input");


function getLatandLong () {
    var cityName = document.getElementById("cityName").value // replace by user uinput -- value/doc getelementby id . val or document
    var requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=155d2cf78a1542364fe20b6634b40ea0`
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
    var requestURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=155d2cf78a1542364fe20b6634b40ea0`
    fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    showForecast(data)

});


}


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
function readLocalStorage(){
  var storageHistory = localStorage.getItem("displayInput")
  if(storageHistory){
    storageHistory = JSON.parse(storageHistory);
  }else{
    storageHistory = [];
  }
  return storageHistory;
}

function getHistoryList (){
  var storageHistory = readLocalStorage();
  storageHistory.push(ssearchResults.value);
  saveToLocalStorage(storageHistory);
  //console.log(storageHistory);

  var child = displayInputEl.lastElementChild;
  while (child) {
    displayInput.removeChild(child);
    child = displayInput.lastElementChild;
  }

  var listEl = document.createElement("ol");

  for(var i = 0; i < storageHistory.length; i++){
    var liEl = document.createElement("li");
    liEl.textContent = storageHistory[i];
    listEl.appendChild(liEl);
    displayInputEl.appendChild(listEl);
  }
}


function  savedCitytoLocalStorage(storageHistory){
  localStorage.setItem("displayInput",JSON.stringify(storageHistory));
}




