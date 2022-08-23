import getAPI from "./api.js"

export default class UI {
    static loadPage() {
        let data = {}
        getAPI("London").then(x => {
            data = x
            console.log(data)
        })
    }
}
