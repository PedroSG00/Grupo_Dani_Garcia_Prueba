import './HomePage.css'
import GiphyImage from '../../components/GiphyImage/GiphyImage'
import Fact from '../../components/Fact/Fact'
import Loader from '../../components/Loader/Loader'
import ImageAndFactService from '../../services/factAndImage.services'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const HomePage = () => {

    const [data, setData] = useState({})

    const loadData = () => {
        ImageAndFactService
            .getFactAndImage()
            .then(({ data }) => setData(data))
            .catch(err => console.log(err))
    }

    const { fact, giphyImage } = data

    console.log(data)

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className='HomePage d-flex align-items-center'>
            <Container className='d-flex justify-content-center align-items-center flex-column'>
                <h1 className='text-center mb-5 color-bg-h1'>Random Cats Facts</h1>
                <Row className='align-items-center justify-content-center'>
                    <Col className='mx-auto'>
                        {giphyImage ? <GiphyImage giphyImage={giphyImage} /> : <Loader />}
                    </Col>
                    <Col className='mx-auto'>
                        <Fact fact={fact} />
                    </Col>
                </Row>
                <Button className='mt-4 hover-btn fw-bold' size="lg" onClick={loadData}>Show other fact!</Button>
            </Container>
        </div >

    )
}

export default HomePage