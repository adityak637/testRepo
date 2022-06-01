import { INTERNET_CONNECTION_ERROR, UNKNOWN_ERROR } from '../constants/AppConstants';

export default function errorCodes(error) {
    if (navigator.onLine) {
        return {
            statusCode: UNKNOWN_ERROR.CODE,
            errorMessage: UNKNOWN_ERROR.MESSAGE
        };
    } else {
        return {
            statusCode: INTERNET_CONNECTION_ERROR.CODE,
            errorMessage: INTERNET_CONNECTION_ERROR.MESSAGE
        };
    }
}

