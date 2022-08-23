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

export default async function getAPI(location) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c33f948099d03df8b1e9c1af37f03a89`, {mode: "cors"})
        const data = await response.json()
        console.log(data)

        let result = {};
        result.wind = data.wind
        
        return result
    } catch (error) {
        console.log(Error("Error"))
    }
}
