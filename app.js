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

async function getWeather(location) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c33f948099d03df8b1e9c1af37f03a89`)
        console.log(response)
    } catch (error) {
        console.log(Error("Error"))
    }
}

getWeather("London")
