import axios from "axios";

class FactAndImageService {
    constructor() {
        this.api = axios.create({

            baseURL: `${process.env.REACT_APP_API_URL}`

        })
    }

    getFactAndImage = () => this.api.get('/fact-and-gif')

}


const factAndImageService = new FactAndImageService()

export default factAndImageService


