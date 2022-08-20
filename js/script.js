//-------------------------------------
// CONST & VAR

// Const Elements Hero
const heroSection = document.querySelector(`.hero-section`);
const inputElement = document.querySelector(`.input-text`);
const searchBtn = document.querySelector(`.search-btn`);

// Const Elements Content
const contentSection = document.querySelector(`.content-section`);
const cityName = document.querySelector(`.city-name`);
const textTemperature = document.querySelector(`.text-temperature`);
const textWeather = document.querySelector(`.text-weather`);
const textHumidity = document.querySelector(`.text-humidity_p`);
const textWind = document.querySelector(`.text-wind_p`);
const textUV = document.querySelector(`.text-UV_p`);

// Const Element Week
const weekSection = document.querySelector(`.week-section`);

// Const to assingment
let city;
let state;
let temperature;
let humidity;
let weatherDescription;
let windSpeed;

// Let for lat and lon
let latitude;
let longitude;

//-------------------------------------


//-------------------------------------
// EVENTS LISTENERS

// Event for change the content on the screen(click 1)
searchBtn.addEventListener(`click`, changeContent);

// Event 

//-------------------------------------


//-------------------------------------
// FUNCTIONS

// Function for change the content on the screen (click 1)
function changeContent () { 
    heroSection.style.display = `none`;
    contentSection.style.display = `flex`;
    weekSection.style.display = `flex`;



    // Start to calling the API
    searchingCityDataAPI();
 };

 // Function searching the API
function searchingCityDataAPI () { 

    // API Key, no more than 100 per day
    const APIKey = `3f803177538139363a1911115a225e38`;

    // Getting the name of the city and cleaning the input
    city = inputElement.value.toLowerCase();
    inputElement.value = ``;

    // Calling the API with the city name for catch the lat and lon
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKey}`).then( (response) => {

        return response.json()

    }).then( (data) => {

        latitude = data[0].lat;
        longitude = data[0].lon;
        state = data[0].state;

        console.log(data);

        getInformation();

    }).catch( (error) => {
        alert(`Something went wrong`);
    });

    //Calling Back the API to catch weather
    const getInformation = () => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`).then( (response) => {


            return response.json()

        }).then( (data) => {

            temperature = Math.floor(data.main.temp);
            console.log(`Temperature: ${temperature}`);

            weatherDescription = data.weather[0].description;
            console.log(weatherDescription);

            humidity = data.main.humidity;
            console.log(`Humidity: ${humidity}`);

            windSpeed = data.wind.speed;
            console.log(windSpeed);

            console.log(data);

            // Set values on the right properities
            setValues();
            getUV();

        })
    };
};

// Function to print values on the screen
function setValues () {

    // Set city name text
    cityName.innerHTML = `${city.toUpperCase()} </br> <span>${state}</span>`;
    // Set Temperature
    textTemperature.innerHTML = `${temperature}<span>°C</span>`;
    // Set weather description
    textWeather.innerText = weatherDescription;
    // Set humidity
    textHumidity.innerText = `${humidity}%`;
    // Set wind
    textWind.innerText = `${windSpeed} km/h`;




    


};

