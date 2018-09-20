import  axios  from 'axios';

class AuthService {
    constructor() {

    }

    async login(email, password) {
        let obj = {
            "email": email,
            "password": password
        }

        return axios.post('http://localhost:3000/auth/login', obj);
    }

}

export default AuthService;