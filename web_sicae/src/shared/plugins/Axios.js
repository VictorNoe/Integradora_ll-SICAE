import axios from "axios";

export const client = axios.create({
    baseURL: "https://localhost:8080/api"
});



