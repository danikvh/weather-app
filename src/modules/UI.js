import getWeather from "./api.js"

export default class UI {   
    static async getLocation() {
        let location = ""
        const search = document.getElementById("header-search")
        if (search.value === "") location = "London"
        else location = search.value
        search.value = ""
        let data = await getWeather(location)
        document.getElementById("location").textContent = data.name
        UI.showInfo(data)
    }

    static showInfo(data) {
        //Icon
        const icon = document.getElementById("icon")
        icon.src = images[data.weather[0].icon + ".png"]

        //Date
        const date = document.getElementById("date")
        date.textContent = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

        //Info boxes
        document.getElementById("clouds").textContent = 
            "Clouds: " + data.clouds.all + "%"
        document.getElementById("temp").textContent = 
            "Temperature: " + Math.round((data.main.temp - 273)* 10) / 10 + "Cº"
        document.getElementById("feels").textContent = 
            "Feels Like: " + Math.round((data.main.feels_like - 273)* 10) / 10 + "Cº"
        document.getElementById("maxtemp").textContent =
            "Max: " + Math.round((data.main.temp_max - 273)* 10) / 10 + "Cº"
        document.getElementById("mintemp").textContent = 
           "Min: " + Math.round((data.main.temp_min - 273)* 10) / 10 + "Cº"
        document.getElementById("humidity").textContent =
            "Humidity: " + data.main.humidity + "%"
        document.getElementById("pressure").textContent = 
            "Pressure: " + data.main.pressure + "hPa"
        document.getElementById("sunrise").textContent =
            "Sunrise: " + new Date(data.sunrise * 1000).toISOString().substr(11, 8)
        document.getElementById("sunset").textContent =
            "Sunset: " + new Date(data.sunset * 1000).toISOString().substr(11, 8)
        document.getElementById("winddeg").textContent = 
            "Wind Degree: " + data.wind.deg + "deg"
        document.getElementById("windspeed").textContent = 
            "Wind Speed: " + data.wind.speed + "m/s"
    } 
}

/* BUTTONS */

let buttonSearch = document.getElementById("header-bttn")
buttonSearch.addEventListener("click", UI.getLocation)


/* OBTAIN ICONS */

const images = {};

function importAll(r) {
    r.keys().forEach((key) => (images[key.replace('./', '')] = r(key)));
}

importAll(require.context('../assets/icons', false, /\.png$/));
