import axios from 'axios';

export function GetCountryId(id){
    return async function(dispatch) {
        const {data} =await axios.get(`https://restcountries.com/v2/alpha/${id}`)
        return dispatch({
            type:'GET_COUNTRY_ID',
            payload:data
        })
    }
}

export function cleanCountry(){
    return {
        type:'CLEAN_COUNTRY'
    }
}