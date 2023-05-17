const apiKey = 'e110dac045609c2898fb3ab7ddf572b0' // Api key
const url = 'https://api.openweathermap.org'; 

const cities = ['London', 'Stockholm', 'Berlin', 'Tokyo']; 


// endpoint, som en webplats som kan innehålla html, json mm, som anropas med fetch och då skickas en http förfrågan. Fetch returnerar då ett http svar.


// Hämta referenser till html koden

let weather = document.getElementById("weather");

let temp = document.getElementById("temp");

let airpress = document.getElementById("airpress")

let humid = document.getElementById("humid");

let wind = document.getElementById("wind");

let dateTime = document.getElementById("dateTime");

// funktion som hämtar vädret
function getWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`) // fetch request med värden som läggs in dynamiskt
        .then(response => response.json()) // respons callback i json
        .then(data => { // data respons
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

const liElements = document.querySelectorAll('h3');
h3Elements.forEach((h3, index) => {
  h3.addEventListener('click', () => {
    const city = cities[index];
    getWeather(city);
  });
});
