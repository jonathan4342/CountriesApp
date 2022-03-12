const initialState = {
    countries: [],
    country:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return{
                ...state,
                countries:action.payload
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
        default:
            return state;
    }
}


export default rootReducer;