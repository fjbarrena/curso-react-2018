import  axios  from 'axios';

class ExploreService {
    constructor() {

    }

    async findAll() {
        return axios.get('http://localhost:3000/explore');
    }
}

export default ExploreService;