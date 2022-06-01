import CryptoJS from 'crypto-js';
import { IV } from '../constants/AppConstants';


const iv = CryptoJS.enc.Hex.parse(IV);

export const aesEncrypt = (data, key) => {
  let cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key),
    {
      iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    }
  );

  return cipher.toString();
}

export const aesDecrypt = (data, key) => {
  let cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key),
    {
      iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    }
  );
  return cipher.toString(CryptoJS.enc.Utf8);
}