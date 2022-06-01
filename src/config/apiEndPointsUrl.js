import { BASE_URL } from './index';

export const LOGIN = `${BASE_URL}/api/login`;
export const GOOGLE_LOGIN = `${BASE_URL}/api/google`;
export const LOGOUT = `${BASE_URL}/api/logout`;
export const REGISTER_USER = `${BASE_URL}/api/register`;
export const SEARCH_TRIPS = `${BASE_URL}/api/showsdata`;
export const VERIFY_PASSWORD = `${BASE_URL}/api/verifiedpassword`;
export const RESET_FORGOT_PASSWORD = `${BASE_URL}/api/reset-password`;
export const CHANGE_PASSWORD = `${BASE_URL}/api/change-password`;
export const FORGOT_PASSWORD = `${BASE_URL}/api/forgot-password`;
export const HOT_LOCATIONS = `${BASE_URL}/api/hotlocation`;
export const HOME_PACKAGES = `${BASE_URL}/api/randomtrip`;
export const GET_DROPDOWN_DATA = `${BASE_URL}/api/get-search-items`;
export const UPDATE_KYC = (id) => `${BASE_URL}/api/document/${id}`;
export const UPDATE_PROFILE = (id) => `${BASE_URL}/api/update-details/${id}`;




