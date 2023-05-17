const apiKey = 'e110dac045609c2898fb3ab7ddf572b0' // Api key
const position = 'London';
// const url =  ("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={e110dac045609c2898fb3ab7ddf572b0}")

// endpoint, som en webplats som kan innehålla html, json mm, som anropas med fetch och då skickas en http förfrågan. Fetch returnerar då ett http svar.


// Hämta referenser till html koden

let weather = document.getElementById("weather");

let temp = document.getElementById("temp");

let airpressure = document.getElementById("air-press")

let humidity = document.getElementById("humid");

let wind = document.getElementById("wind");

let dateTime = document.getElementById("date-time");

// funktion som hämtar vädret
function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}")
        .then(response => response.json())
        .then(data => {

         
  }   
 
}