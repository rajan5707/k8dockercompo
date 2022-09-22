import axios from "axios";

//const baseUrl = 'http://localhost:8080/authentication-service';
const baseUrl = 'http://13.235.16.107:8080/authentication-service';


export const ForgotPasswordAPI = (userData) => {
    var data = {
        isSuccess: false,
        data:'',
    };
    return axios.put(`${baseUrl}/api/v2/password`, userData)
    .then( (response) => {
        data.isSuccess = true;
        data.data = response.data[0];
        return data
    } )
    .catch(err => {
        data.isSuccess = false;
        data.data = err
        return data
    })
}