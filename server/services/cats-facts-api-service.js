const axios = require('axios')

class CatFactApiService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://catfact.ninja'
        })

    }

    getCatFact = () => this.axiosApp.get(`/fact`)

}

const catFactApiService = new CatFactApiService()

module.exports = catFactApiService