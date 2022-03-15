const initialState = {
    countries: [],
    countriesF:[],
    country:null,
    searchCountry:''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return{
                ...state,
                countries:action.payload,
                countriesF:action.payload
            }
        case 'GET_COUNTRY_ID':
            return {
                ...state,
                country:action.payload
            }
        case 'CLEAN_COUNTRY':
            return{
                ...state,
                country:null
            }
        case 'FILTER_COUNTRIES_NAME':
            return{
                ...state,
                searchCountry:action.payload
            }
        case 'FILTER_COUNTRIES_REGION':
            return{
                ...state,
                countriesF:state.countries.filter(el=>{
                    if(action.payload!=='all'){
                        return el.region.toLowerCase()===action.payload.toLowerCase()
                    }
                    else{
                        return true
                    }
                })
            }
        default:
            return state;
    }
}


export default rootReducer;