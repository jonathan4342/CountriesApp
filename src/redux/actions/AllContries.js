import axios from "axios";

export function getAllCountries (){
    return async function (dispatch) {
        const {data}= await axios.get(`https://restcountries.com/v2/all`)
        return dispatch({
            type:'GET_ALL_COUNTRIES',
            payload:data
        })
    }
}
