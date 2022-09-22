import axios from "axios";

// const baseUrl = 'http://localhost:8080/payment-service';
const baseUrl = 'http://13.235.16.107:8080/payment-service';


export const Payment = (amount) => {
    var data = {
        isSuccess: false,
        data:'',
    };
    const params = {
        amount : amount
    }
   return axios.post(`${baseUrl}/api/v5/payment`,null,{params})
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