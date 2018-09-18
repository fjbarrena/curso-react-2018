import  axios  from 'axios';

class RecommendationsService {
    constructor() {

    }

    async findAll() {
        return axios.get('http://localhost:3000/recommendations');
    }
}

export default RecommendationsService;