import { fetchWrapper } from '../../Service/Service';
import { RESET_FORGOT_PASSWORD } from '../../Config/apiEndPointsUrl';

/**
 * Reset Password API Call
 * @param {*} username 
 * @param {*} confirmationCode 
 * @param {*} newPassword 
 * @returns 
 */
export function resetPassword(username, confirmationCode, newPassword) {
  const url = RESET_FORGOT_PASSWORD;
  const body = {
    "username": username,
    "password": newPassword,
    "code": confirmationCode
  }
  return fetchWrapper(url, 'POST', body);
}