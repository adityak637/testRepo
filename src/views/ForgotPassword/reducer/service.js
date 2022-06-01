import { fetchWrapper } from '../../../Service/Service';
import { FORGOT_PASSWORD } from '../../../Config/apiEndPointsUrl';


/**
 * Login apis
 * @param {*} username 
 * @returns 
 */
export function forgotPassword(username) {
  const url = FORGOT_PASSWORD;
  const body = {
    "email": username
  }
  return fetchWrapper(url, 'POST', body);
}





