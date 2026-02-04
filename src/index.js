import "./styles.css";

const apiKey = "T3LW8K4FVWYWQM8EAAR88JYKT";
const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

// Adding day names to daily data
function getDayName(dateString, format = 'short') {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: format });
}

// Icon context
const iconContext = require.context('./svg-icons', false, /\.svg$/);
function getIconPath(iconName) {
    try {
        // This finds the correct bundled path for "sun.svg"
        return iconContext(`./${iconName}.svg`);
    } catch (e) {
        return iconContext('./default.svg');
    }
}

// Creates memory objects if not exists
if(!JSON.parse(localStorage.getItem("cities"))) {
    localStorage.setItem("cities", JSON.stringify(["London"]));
}
if(!JSON.parse(localStorage.getItem("activeCity"))) {
    localStorage.setItem("activeCity", JSON.stringify(["London"]));
}
if(!JSON.parse(localStorage.getItem("settings"))) {
    localStorage.setItem("settings", JSON.stringify({
        "unit": "metric"
    }))
}
let cities = JSON.parse(localStorage.getItem("cities"));

// Displaying data 
document.addEventListener("DOMContentLoaded", async () => {
    // Navigation style based on page
    if(window.location.href.includes("index.html")) 
        mainRedirect.classList.add("highlight-navigation");

    const activeCity = JSON.parse(localStorage.getItem("activeCity"));
    const data = await getWeatherData(activeCity);
    displayData(data);
})

// Getting weather data
async function getWeatherData(location) {
    const unit = JSON.parse(localStorage.getItem("settings")).unit;
    try {
        const response = await fetch(`${baseUrl}${location}?unitGroup=${unit}&key=${apiKey}&contentType=json`);
        
        if (response.ok) {
            const data = await response.json();
            return dataCleaner(data);
        } else {
            // Captures 400 or 404 errors from the API
            console.error(`API Error: ${response.status} - ${response.statusText}`);
            return null; 
        }
    } catch (error) {
        // Captures network failures (e.g., no internet)
        console.error("Network or Script Error:", error);
        return null;
    }
}

function dataCleaner(apiData) {
    const todayDate = apiData.days[0].datetime;

    return {
        city: apiData.resolvedAddress,
        temp: apiData.currentConditions.temp,
        condition: apiData.currentConditions.conditions,
        description: apiData.description,
        icon: apiData.currentConditions.icon,
        humidity: apiData.currentConditions.humidity,

        // Hourly data
        hourly: apiData.days[0].hours
            .filter((_, index) => index % 4 === 0) 
            .slice(0, 6)
            .map(hour => ({
                time: hour.datetime.slice(0, 5), 
                temp: hour.temp,
                icon: hour.icon
            })),

        // 7 day forecast data
        daily: apiData.days.slice(0, 7).map((day, index) => {
            return {
                dayName: index === 0 ? "Today" : getDayName(day.datetime, 'short'),
                tempMax: day.tempmax,
                tempMin: day.tempmin,
                icon: day.icon,
                date: day.datetime,
                condition: day.conditions
            };
        }),

        // Wheather details
        details: {
            feelsLike: apiData.currentConditions.feelslike,
            windSpeed: apiData.currentConditions.windspeed,
            uvIndex: apiData.currentConditions.uvindex,
            rainChance: apiData.currentConditions.precipprob,
            sunrise: apiData.currentConditions.sunrise,
            sunset: apiData.currentConditions.sunset 
        },
    }
}

// DOM Elements
const mainRedirect = document.querySelector("#main-redirect");
const inputBox = document.querySelector(".search");
const overlay = document.querySelector("#custom-modal-overlay");
const cityPreview = document.querySelector("#city-preview");
const cityName = document.querySelector(".city-name");
const condition = document.querySelector(".rain-chance");
const temp = document.querySelector(".temp");
const citiesRedirect = document.querySelector("#cities-redirect");
const mainIconContainer = document.querySelector("#main-icon");
const todayForecast = document.querySelector(".forecast-section");
const realFeel = document.querySelector("#real-feel");
const chanceOfRain = document.querySelector("#chance-of-rain");
const sunriseCard = document.querySelector("#sunrise");
const sunsetCard = document.querySelector("#sunset");
const wind = document.querySelector("#wind");
const uvIndex = document.querySelector("#uv-index");
const weekForecastParent = document.querySelector(".week-forecast-parent");
const settingsRedirect = document.querySelector("#settings-redirect");

// Displaying the data in the containers
function displayData(data) {
    cityName.textContent = data.city;
    condition.textContent = data.condition;
    temp.textContent = data.temp + "°";
    
    // Displaying the main icon
    const icon = document.createElement("img");
    icon.src = getIconPath(data.icon);
    mainIconContainer.appendChild(icon);

    // Building the day forecast
    data.hourly.forEach((hourData) => {
        const divContainer = document.createElement("div");
        divContainer.classList.add("forecast-card");

        const timeText = document.createElement("h4");
        timeText.textContent = hourData.time;

        const icon = document.createElement("img");
        icon.src = getIconPath(hourData.icon);
        icon.classList.add("small-icon");

        const temp = document.createElement("h4");
        temp.textContent = hourData.temp;

        divContainer.appendChild(timeText);
        divContainer.appendChild(icon);
        divContainer.appendChild(temp);
        todayForecast.appendChild(divContainer);
    })

    // Details section
    const realFeelText = document.createElement("h4");
    realFeelText.textContent = data.details.feelsLike;
    realFeel.appendChild(realFeelText);

    const chanceOfRainText = document.createElement("h4");
    chanceOfRainText.textContent = data.details.rainChance + "%";
    chanceOfRain.appendChild(chanceOfRainText);

    const sunriseText = document.createElement("h4");
    sunriseText.textContent = data.details.sunrise.slice(0,5);
    sunriseCard.appendChild(sunriseText);

    const sunsetText = document.createElement("h4");
    sunsetText.textContent = data.details.sunset.slice(0, 5);
    sunsetCard.appendChild(sunsetText);

    const windText = document.createElement("h4");
    windText.textContent = data.details.windSpeed;
    wind.appendChild(windText);

    const uvIndexText = document.createElement("h4");
    uvIndexText.textContent = data.details.uvIndex;
    uvIndex.appendChild(uvIndexText);

    // Week forecast section
    data.daily.forEach((dayData) => {
        const dayCard = document.createElement("div");
        dayCard.classList.add("day-card");

        const dayNameContainer = document.createElement("h4");
        dayNameContainer.classList.add("day-name");
        dayNameContainer.textContent = dayData.dayName;

        const icon = document.createElement("img");
        icon.src = getIconPath(dayData.icon);

        const condition = document.createElement("h4");
        condition.classList.add("day-condition");
        condition.textContent = dayData.condition.split(",")[0];

        const temp = document.createElement("h4");
        temp.classList.add("day-temp");
        temp.textContent = dayData.tempMax + "° / " + dayData.tempMin + "°";

        dayCard.appendChild(dayNameContainer);
        dayCard.appendChild(icon);
        dayCard.appendChild(condition);
        dayCard.appendChild(temp);
        weekForecastParent.appendChild(dayCard);
    })
}

// Displaying the confirmation modal
inputBox.addEventListener("keydown", async (event) => {
    if(inputBox.value === "") 
        return;
    if(event.key === "Enter") {
        // Abort saving if city already exists
        const cities = getCitiesFromStorage();
        if(cities.includes(inputBox.value)) return;

        // Fetching data from server
        const data = await getWeatherData(inputBox.value);
        if(data) {
            cityPreview.textContent = inputBox.value + " ";
            overlay.classList.remove("modal-hidden");
        }
    };
});

// Redirect to select cities
citiesRedirect.addEventListener("click", () => {
    window.location.href = "cities.html";
})

settingsRedirect.addEventListener("click", () => {
    window.location.href = "settings.html";
})

// Hide the confirmation box
document.addEventListener("click", async (e) => {
    if (e.target.closest("#cancel-btn")) {
        e.preventDefault();
        overlay.classList.add("modal-hidden");
    } else if(e.target.closest("#confirm-btn")) {
        e.preventDefault();
        const data = await getWeatherData(inputBox.value);
        overlay.classList.add("modal-hidden");

        // Save city
        saveCityToStorage(data.city);
    }
});

// Storage functions
// Storage read
function getCitiesFromStorage() {
    return JSON.parse(localStorage.getItem("cities") || []);
}

// Save city
function saveCityToStorage(city) {
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));
}
