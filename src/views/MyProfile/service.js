import { fetchWrapper } from '../../Service/Service';
import { UPDATE_PROFILE } from '../../Config/apiEndPointsUrl';


/**
 * Login apis
 * @param {*} email 
 * @returns 
 */
export function updateProfile(data) {
    const url = UPDATE_PROFILE(id);
    const body = {
        ...data
    }
    return fetchWrapper(url, 'POST', body);
}






