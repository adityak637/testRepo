import { fetchWrapper } from '../../Service/Service';
import { CHANGE_PASSWORD } from '../../Config/apiEndPointsUrl';


/**
 * Login apis
 * @param {*} email 
 * @returns 
 */
export function changePassword(oldPassword, password, confirmPassword) {
    const url = CHANGE_PASSWORD;
    const body = {
        "currentpassword": oldPassword,
        "newpassword": password,
        "confirmpassword": confirmPassword
    }
    return fetchWrapper(url, 'POST', body);
}






