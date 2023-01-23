const { getCatFact } = require('../services/cats-facts-api-service')
const { getGif } = require('../services/giphy-api-service')

const getFactAndGif = async (req, res, next) => {
    try {
        const { data: { fact } } = await getCatFact()
        const cuttedFact = fact.split(' ').slice(0, 3).join(' ')
        const { data: { data } } = await getGif(cuttedFact)
        const randomIndex = Math.floor(Math.random() * data.length)
        const { images: { original: { webp } } } = data[randomIndex]
        const imageAndFact = { fact, giphyImage: webp }

        res.status(200).json(imageAndFact)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getFactAndGif
}
