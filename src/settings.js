import "./styles.css";

// Event listener for navigation
const mainRedirect = document.querySelector("#main-redirect");
mainRedirect.addEventListener("click", () => {
    window.location.href = "index.html";
})

const citiesRedirect = document.querySelector("#cities-redirect");
citiesRedirect.addEventListener("click", () => {
    window.location.href = "cities.html";
})

const settingsRedirect = document.querySelector("#settings-redirect");
settingsRedirect.classList.add("highlight-navigation");

const metricCelsius = document.querySelector("#celsius");
const metricFarenheit = document.querySelector("#farenheit");
const settings = JSON.parse(localStorage.getItem("settings"));
const isMetric = settings["unit"] === "metric";

// Displaying the current setting
metricCelsius.classList.toggle("highlight-button", isMetric);
metricFarenheit.classList.toggle("highlight-button", !isMetric);

// Event listener to change the setting
const unitCard = document.querySelector(".unit-card");
unitCard.addEventListener("click", (event) => {
    if(event.target.closest("#celsius")) {
        settings.unit = "metric";
        localStorage.setItem("settings", JSON.stringify(settings));
    } else if(event.target.closest("#farenheit")) {
        settings.unit = "us";
        localStorage.setItem("settings", JSON.stringify(settings));
    }
    
    // Updating display
    const isMetric = settings["unit"] === "metric";
    metricCelsius.classList.toggle("highlight-button", isMetric);
    metricFarenheit.classList.toggle("highlight-button", !isMetric);
})