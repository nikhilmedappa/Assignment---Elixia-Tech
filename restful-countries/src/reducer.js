import { REGION_REQUEST, REGION_SUCCESS, REGION_FAIL, COUNTRY_REQUEST, COUNTRY_SUCCESS, COUNTRY_FAIL } from "./actions/types"

function regionReducer(state = { region: "" }, action) {
    switch (action.type) {
        case REGION_REQUEST:
            return { loading: true };
        case REGION_SUCCESS:
            return { loading: false, region: action.payload, continent: action.continent, color: action.color };
        case REGION_FAIL: 
            return { loading: false, error: action.payload};
        default: return state;
    }
}

function countryReducer(state = { countrydetails: ""}, action) {
    switch (action.type) {
        case COUNTRY_REQUEST:
            return { loading: true };
        case COUNTRY_SUCCESS:
            return { loading: false, countrydetails: action.payload, country: action.country };
        case COUNTRY_FAIL: 
            return { loading: false, error: action.payload};
        default: return state;
    }
}

export { regionReducer, countryReducer }