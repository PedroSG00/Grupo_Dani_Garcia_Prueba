import './GiphyImage.css'

const GiphyImage = ({ giphyImage }) => {

    return (
        <img src={`${giphyImage}`} alt="Nothing" className='p-3 GiphyImage' />
    )
}

export default GiphyImage