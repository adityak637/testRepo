import { fetchWrapper } from '../../../Service/Service';
import { SEARCH_TRIPS, HOT_LOCATIONS, HOME_PACKAGES, GET_DROPDOWN_DATA } from '../../../Config/apiEndPointsUrl';


/**
 * 
 * @param {*} date 
 * @param {*} location 
 * @param {*} travellerName 
 * @returns 
 */
export function getTripsData(date, location, travellerName) {
    const url = SEARCH_TRIPS;
    const body = {
        "date": date,
        "locations": location,
        "traveller_name": travellerName
    }
    return fetchWrapper(url, 'POST', body);
}

/**
 * 
 */
export function getHotLocations() {
    const url = HOT_LOCATIONS;
    return fetchWrapper(url, 'POST', null);
}


/**
 * 
 */
export function getHomePackages() {
    const url = HOME_PACKAGES;
    return fetchWrapper(url, 'POST', null);
}

/**
 * 
 */
export function getDropdownData() {
    const url = GET_DROPDOWN_DATA;
    return fetchWrapper(url, 'POST', null);
}





