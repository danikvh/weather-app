// Non asynchornous function, using promises
/* function getWeather(location) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c33f948099d03df8b1e9c1af37f03a89`)
    .then(function(response) {
    console.log(response)
    })
    .catch(function(err) {
    console.log(err)
    });
} */

export default async function getWeather(location) {
    await getAPI(location)
    return JSON.parse(localStorage.getItem("weatherData"))
}

async function getAPI(location) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c33f948099d03df8b1e9c1af37f03a89`, {mode: "cors"})
        const data = await response.json()

        let result = {};
        result.clouds = data.clouds
        result.main = data.main
        result.name = data.name
        result.rain = data.rain
        result.sunrise = data.sys.sunrise
        result.sunset = data.sys.sunset
        result.timezone = data.timezone
        result.visibility = data.visibility
        result.weather = data.weather
        result.wind = data.wind

        localStorage.setItem("weatherData", JSON.stringify(result))
    } catch (error) {
        console.log(Error("Error"))
    }
}
