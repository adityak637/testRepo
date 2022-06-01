import { fetchWrapper } from '../../Service/Service';
import { REGISTER_USER } from '../../Config/apiEndPointsUrl';


/**
 * Login apis
 * @param {*} email 
 * @returns 
 */
export function registerUser(email) {
  const url = REGISTER_USER;
  const body = {
    "email": email
  }
  return fetchWrapper(url, 'POST', body);
}






