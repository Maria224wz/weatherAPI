const apiKey = 'e110dac045609c2898fb3ab7ddf572b0' // Api key
const url = 'https://api.openweathermap.org';

const cities = ['London', 'Stockholm', 'Berlin', 'Tokyo'];


// Hämta referenser till html koden

let weather = document.getElementById("weather");

let temp = document.getElementById("temp");

let airpress = document.getElementById("airpress")

let humid = document.getElementById("humid");

let wind = document.getElementById("wind");

let dateTime = document.getElementById("dateTime");

let selectedCity = document.getElementById("selectedCity"); // ref till selected city


// funktion som hämtar vädret
function getWeather(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`) // fetch request med värden
    .then(response => response.json()) // respons callback i json
    .then(data => { // data respons
      selectedCity.textContent = cityName; // lägger till vald stad och visar med namn
      // uppdatering av väder:
      weather.textContent = data.weather[0].main; // sätter texten av väder elementet och refererar till id i html
      temp.textContent = `${Math.round(data.main.temp - 273.15)}°C`// data från temp till celcius
      airpress.textContent = `${data.main.pressure} hPa`;
      humid.textContent = `${data.main.humidity}% `;
      wind.textContent = `${data.wind.speed} m / s`;
      dateTime.textContent = `${new Date().toLocaleString()} `;
    })
    .catch(error => {
      console.log('An error occurred while fetching the weather:', error);
    });
}

// Lägga till händelsehanterare:

const h3Elements = document.querySelectorAll('h3');
h3Elements.forEach((h3, index) => {
  h3.addEventListener('click', () => {
    const city = cities[index];
    selectedCity.textContent = city; // visa valda stadens nanmn 
    getWeather(city);
  });
});


// Funktion för att uppdatera datum och tid:
function updateTime() {
  dateTime.textContent = new Date().toLocaleString()
} // uppdaterar tiden varje sekund
// textContent av datetime sätts till aktuell tid och datum, och returneras av new date som ger den aktuell tiden. toLocalString konverterar datum och tid tillen string som visas på sidan.


// funktion för att uppdatera vädret var 30min
function updatetheWeather() {
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    getWeather(city);
  } // för varje stad, loop som itererar över varje stad i cities arrayen, och city är den nuvarande staden. getWeather funktionen anropas med aktuell city, så att getweather hämtar och uppdaterar vädret för specifika staden.
}

setInterval(updateTime, 1000);
// updateTime funktionen körs av setintervall för att uppdatera varje sekund (1000millisekunder)

updatetheWeather(); // kallar på funktionen updatetheweather
setInterval(updatetheWeather, 30 * 60 * 1000) // kör updatetheweather funktionen av setinterval och sätter intervallet på varje 30min
