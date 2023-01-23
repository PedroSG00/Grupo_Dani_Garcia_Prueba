const catFactApiService = require('../services/cats-facts-api-service')
const giphyApiService = require('../services/giphy-api-service')

const getFactAndGif = async (req, res, next) => {

    try {

        const catFact = await catFactApiService.getCatFact()
        const { data } = catFact
        const { fact } = data
        const cuttedFact = fact.split(' ').slice(0, 3).join(" ")

        const gif = await giphyApiService.getGif(cuttedFact)
        const randomIndexSearch = Math.floor(Math.random() * (gif.data.data.length - 1 - 0 + 1) + 1)

        const giphyImage = gif.data.data[randomIndexSearch].images.original.webp
        const imageAndFact = { fact, giphyImage }

        res.status(200).json(imageAndFact)

    } catch (err) {

        next(err)

    }

}

module.exports = {
    getFactAndGif,
}

