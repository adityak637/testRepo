import { fetchWrapper } from '../../Service/Service';
import { UPDATE_KYC } from '../../Config/apiEndPointsUrl';


/**
 * Login apis
 * @param {*} email 
 * @returns 
 */
export function updateKYC(data) {
    const url = UPDATE_KYC(id);
    const body = {
        ...data
    }
    return fetchWrapper(url, 'POST', body);
}






