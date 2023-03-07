import axios from "axios";

const baseURL = 'http://localhost:8080/api/career/';

class Axios{

    getAllCareer(){
        return axios.get(`${baseURL}`)
    }

}

export default new Axios();