const queryString = require('query-string');
import { aesEncrypt, aesDecrypt } from './encryptDecrypt';
import { isEmpty } from 'lodash';
import { AES_KEY } from '../Config';

const getItem = (key) => {
  try {
    const decryptData = sessionStorage.getItem(key);
    return aesDecrypt(decryptData, AES_KEY);
  } catch (err) {
    return false;
  }
};

const setItem = (key, value) => {
  if (!value) {
    return;
  }
  try {
    const encryptedText = aesEncrypt(value, AES_KEY);
    sessionStorage.setItem(key, encryptedText);
  } catch (err) {
    return false;
  }
};

(() => {
  const queryStringData = queryString.parse(location.search);
  if (!queryStringData || isEmpty(queryStringData)) return; // if query string is not present do not update local storage

})();

export default { getItem, setItem };
