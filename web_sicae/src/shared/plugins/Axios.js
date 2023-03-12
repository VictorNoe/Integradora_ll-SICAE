import * as instance from 'axios';

const requestHandler = (request) => {
    request.headers["Accept"] = "application/json";
    request.headers["Content-Type"] = "application/json";
}