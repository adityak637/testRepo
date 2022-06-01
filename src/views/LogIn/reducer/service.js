import { fetchWrapper } from '../../../Service/Service';
import { GOOGLE_LOGIN, LOGIN, LOGOUT } from '../../../Config/apiEndPointsUrl';


/**
 * Login apis
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */
export function userAuthenticate(username, password) {
  const url = LOGIN;
  const body = {
    "username": username,
    "password": password
  }
  return fetchWrapper(url, 'POST', body);
}


/**
 * 
 * @returns 
 */
export function googleLogin() {
  const url = GOOGLE_LOGIN;
  const body = {}
  return fetchWrapper(url, 'GET', null);
}

export function userLogout() {
  const url = LOGOUT;
  return fetchWrapper(url, 'POST', null);
}





