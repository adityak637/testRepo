import { fetchWrapper } from '../../../Service/Service';
import { VERIFY_PASSWORD } from '../../../Config/apiEndPointsUrl';


/**
 * create password apis
 * @param {*} key 
 * * @param {*} password  
 * @returns 
 */
export function verifyPassword(key, password) {
  const url = VERIFY_PASSWORD;
  const body = {
    "security_key": key,
    "password": password
  }
  return fetchWrapper(url, 'POST', body);
}





