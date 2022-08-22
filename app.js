
fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c33f948099d03df8b1e9c1af37f03a89')
.then(function(response) {
  console.log(response)
})
.catch(function(err) {
  console.log(err)
});