const baseURL = 'http://localhost:8080/api/career/';

class AxiosFetch{
    getAllCareer(){
        return fetch(baseURL).then((res => res.json));
    }
}

export default new AxiosFetch();