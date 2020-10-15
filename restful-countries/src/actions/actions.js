import { REGION_REQUEST, REGION_SUCCESS, REGION_FAIL, COUNTRY_REQUEST, COUNTRY_SUCCESS, COUNTRY_FAIL } from "./types"

import Axios from 'axios';
import Cookies from 'js-cookie'

const BaseUrl = "https://restcountries.eu/rest/v2/"

export const getRegionDetails = ( continent, color ) => async (dispatch) => {
    dispatch({ type: REGION_REQUEST });

    try {
        const { data } = await Axios.get(BaseUrl + "region/" + continent);
        dispatch({ type: REGION_SUCCESS, payload: data, continent: continent, color: color });
        console.log("Countries: ", data)
    } catch (error) {
        dispatch({ type: REGION_FAIL, payload: error.message })
    }   
}

export const getCountryDetails = ( country ) => async (dispatch) => {
    dispatch({ type: COUNTRY_REQUEST });

    try {
        const countries = Cookies.get('countries')
        console.log("Cookie ", countries)

        const countrydata = await countries.filter(async (item) => {
            if(item.name.includes(country)){
                return item;
            }
            else{
                const {data} = Axios.get(BaseUrl + "name/" + country + "?fullText=true");
                return data
            }
        })  

        dispatch({ type: COUNTRY_SUCCESS, payload: countrydata, country: country });
        Cookies.set('countries', countrydata)
        
        
    } catch (error) {
        dispatch({ type: COUNTRY_FAIL, payload: error.message })
    }   
}