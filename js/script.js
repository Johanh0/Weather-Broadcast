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
const imgDescription = document.querySelector(`.img-description`);
const textWeather = document.querySelector(`.text-weather`);
const textHumidity = document.querySelector(`.text-humidity_p`);
const textWind = document.querySelector(`.text-wind_p`);
const textUV = document.querySelector(`.text-UV_p`);

// Const Element Week
const weekSection = document.querySelector(`.week-section`);

// Const to assingment
let city;
let cityLocalStorage = []
let cityObj = {
    id: Date.now(),
    city
}
let state;
let temperature;
let humidity;
let weatherDescription;
let windSpeed;

// Let for lat and lon
let latitude;
let longitude;

// Array for the cities on LocalStorage


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
    cityLocalStorage = [...cityLocalStorage, cityObj];
    new cityObj = { 
        id: Date.now(),
        city: city
    }
    localStorage.setItem(`city`, JSON.stringify(cityLocalStorage));
    inputElement.value = ``;
    createAsideCard(city);

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

            weatherDescription = data.weather[0].main;
            console.log(weatherDescription);

            humidity = data.main.humidity;
            console.log(`Humidity: ${humidity}`);

            windSpeed = data.wind.speed;
            console.log(windSpeed);

            console.log(data);

            // Set values on the right properities
            setValues();

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

    // Set imagen logic
    switch (weatherDescription) {
        case `Clear`:
            imgDescription.src = `../assets/weather-img/clearSky.svg`;
            imgDescription.alt = `Clear sky imagen`;
            break;

        case `Clouds`:
            imgDescription.src = `./assets/weather-img/fewClouds.svg`;
            imgDescription.alt = `Few clouds imagen`;
            break;

        case `Clouds`:
            imgDescription.src = `./assets/weather-img/scatClouds.svg`;
            imgDescription.alt = `scattered clouds imagen`;
            break;

        case `Clouds`:
            imgDescription.src = `./assets/weather-img/fewClouds.svg`;
            imgDescription.alt = `broken clouds imagen`;
            break;

        case `Rain`:
            imgDescription.src = `./assets/weather-img/rain.svg`;
            imgDescription.alt = `rain imagen`;
            break;

        case `Thunderstorm`:
            imgDescription.src = `./assets/weather-img/thunderStorm.svg`;
            imgDescription.alt = `thunderstorm imagen`;
            break; 
            
        case `Snow`:
            imgDescription.src = `./assets/weather-img/snow.svg`;
            imgDescription.alt = `snow imagen`;
            break; 

        case `Mist`:
            imgDescription.src = `./assets/weather-img/fewClouds.svg`;
            imgDescription.alt = `mist imagen`;
            break;

        default:
            imgDescription.src = `./assets/weather-img/snow.svg`;
            imgDescription.alt = `mist imagen`;
            break;
    };

};

// ----------------------------
// Save info on localStorage
// const asideCard = document.querySelector(`.aside-card`);
// const asideText = document.querySelector(`.asdie-text`);


// Aside Function for cards on the local storage
function asideCardLocalStorage() {

}

// Aside Function for create new cards
function createAsideCard(city) {

    const asideNav = document.querySelector(`.aside-nav`);

    // Create Elements
    const asideCard = document.createElement(`div`);
    const asideText = document.createElement(`p`);

    // Add classes
    asideCard.classList.add(`aside-card`);
    asideText.classList.add(`aside-text`);

    // Insert Text
    asideText.innerText = city;

    // Append childs
    asideNav.appendChild(asideCard);
    asideCard.appendChild(asideText);
}


