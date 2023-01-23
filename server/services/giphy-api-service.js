const axios = require('axios')
const API_KEY = process.env.API_KEY_GIPHY

class GiphyApiService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api.giphy.com/v1/gifs'
        })

    }

    getGif = (query) => this.axiosApp.get(`/search?api_key=${API_KEY}&q=${query}`)

}

const giphyApiService = new GiphyApiService()

module.exports = giphyApiService