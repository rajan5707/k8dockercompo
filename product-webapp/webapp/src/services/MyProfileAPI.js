import axios from "axios";

//const baseUrl = 'http://localhost:8080/user-service';
const baseUrl = 'http://13.235.16.107:8080/user-service';


export const editDetails = (userData) => {
    const type = localStorage.getItem("MyType");
    var data = {
        isSuccess: false,
        data:'',
    };
    return axios.put(`${baseUrl}/api/v1/${type}/${userData.emailId}`, userData)
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