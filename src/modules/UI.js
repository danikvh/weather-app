import getWeather from "./api.js"

export default class UI {
    static async loadPage() {
        let data = await getWeather("London")
        console.log(data)  
        this.showInfo(data)
    }

    static showInfo(data) {
        const icon = document.createElement("img")
        icon.src = images[data.weather[0].icon + ".png"]
        document.getElementById("headline").appendChild(icon)

        document.getElementById("clouds").textContent = 
            "Clouds: " + data.clouds.all
        document.getElementById("temp").textContent = 
            "Temperature: " + data.main.temp
        document.getElementById("feels").textContent = 
            "Feels Like: " + data.main.feels_like
        document.getElementById("maxtemp").textContent =
            "Max Temperature: " + data.main.temp_max
        document.getElementById("mintemp").textContent = 
           "Min Temperature: " + data.main.temp_min
        document.getElementById("humidity").textContent =
            "Humidity: " + data.main.humidity
        document.getElementById("pressure").textContent = 
            "Pressure: " + data.main.pressure
        document.getElementById("sunrise").textContent =
            "Sunrise: " + data.sunrise 
        document.getElementById("sunset").textContent =
            "Sunset: " + data.sunset  
        document.getElementById("timezone").textContent = 
            "Time Zone: " + data.timezone 
        document.getElementById("winddeg").textContent = 
            "Wind Degree: " + data.wind.deg 
        document.getElementById("windspeed").textContent = 
            "Wind Speed: " + data.wind.speed 
    }  
}



/* OBTAIN ICONS */

const images = {};

function importAll(r) {
    r.keys().forEach((key) => (images[key.replace('./', '')] = r(key)));
}

importAll(require.context('../assets/icons', false, /\.png$/));