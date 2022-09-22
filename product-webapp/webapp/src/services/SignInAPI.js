import axios from "axios";

//const baseUrl = 'http://localhost:8080/authentication-service';
const baseUrl = 'http://13.235.16.107:8080/authentication-service';


export const loginUsers = (details) => {
    var data = {
        isSuccess: false,
        data:'',
    };
   return axios.post(`${baseUrl}/api/v2/login`, details)
    .then( (response) => {
        data.isSuccess = true;
        data.data = response.data;
        return data
    } )
    .catch(err => {
        data.isSuccess = false;
        data.data = err
        return data
    })

}

