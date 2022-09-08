import getWeather from "./api.js"

export default class UI {
    static async loadPage() {
        let data = await getWeather("London")
        console.log(data)  
        this.showInfo(data)
    }

    static showInfo(data) {
        document.getElementById("clouds").textContent = 
            "Clouds: " + data.clouds.all
    }
}
