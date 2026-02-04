import "./styles.css";

function getCitiesFromStorage() {
    const data = localStorage.getItem("cities");
    return data ? JSON.parse(data) : [];
}

const citiesRedirect = document.querySelector("#cities-redirect");
document.addEventListener("DOMContentLoaded", () => {
    // Navigation style based on page
    if(window.location.href.includes("cities.html")) 
        citiesRedirect.classList.add("highlight-navigation");

    const citySelection = document.querySelector(".city-selection");
    
    // Safety check: only run if we are on the page with .city-selection
    if (!citySelection) return; 
    let cities = getCitiesFromStorage();

    cities.forEach((city) => {
        const cityCard = document.createElement("div");
        cityCard.classList.add("city-card", "liquid-glass");
        cityCard.dataset.city = city;

        const cityText = document.createElement("h2");
        cityText.textContent = city;

        const selectBtn = document.createElement("button");
        selectBtn.textContent = "Select";
        selectBtn.classList.add("select-btn");
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-city-btn");

        cityCard.appendChild(cityText);
        cityCard.appendChild(selectBtn);
        cityCard.appendChild(deleteBtn);
        citySelection.appendChild(cityCard);
    });

    // 2. Event Delegation for selection and delete
    citySelection.addEventListener("click", (event) => {
        if (event.target.classList.contains("select-btn")) {
            const chosenCity = event.target.parentElement.dataset.city;
            
            // Save this specific city as the "active" one for index.html to read
            localStorage.setItem("activeCity", JSON.stringify(chosenCity));
            window.location.href = "index.html";
        } else if(event.target.classList.contains("delete-city-btn")) {
            const chosenCity = event.target.parentElement.dataset.city;

            // Delete city from the array and save array
            cities = cities.filter((city) => city !== chosenCity);
            localStorage.setItem("cities", JSON.stringify(cities));
            event.target.parentElement.remove();
        }
    });
});

// Event listener for navigation
const mainRedirect = document.querySelector("#main-redirect");
mainRedirect.addEventListener("click", () => {
    window.location.href = "index.html";
})

const settingsRedirect = document.querySelector("#settings-redirect");
settingsRedirect.addEventListener("click", () => {
    window.location.href = "settings.html";
})