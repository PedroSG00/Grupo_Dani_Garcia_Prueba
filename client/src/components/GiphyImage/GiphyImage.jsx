import './GiphyImage.css'

const GiphyImage = ({ giphyImage }) => {

    console.log(giphyImage, '-------------')

    return (
        <img src={`${giphyImage}`} alt="Nothing" />
    )
}


export default GiphyImage