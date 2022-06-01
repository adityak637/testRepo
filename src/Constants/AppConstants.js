export const REGEX = {
  PASSWORD_REGEX:
    /((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%&*]).{10,30})|((?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,30})|((?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,30})|((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{10,30})|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,30}$/,
};

export const MAXLENGTH = {
  NAME: 100,
  EMAIL: 100,
  VERIFICATION_CODE: 6,
  PASSWORD: 50,
  COUNT: 5,
};

export const BASE_DIMENSIONS = {
  MOBILE: {
    WIDTH: 320,
    HEIGHT: 568,
  },
  TABLET: {
    WIDTH: 600,
    HEIGHT: 1024,
  },
};

export const HTTP_STATUS = {
  ALREADY_EXIST: "402",
  NOT_EXIST: "402",
  INVALID_REQUEST: "403",
  USER_NOT_FOUND: '404',
  SUCCESS: "200",
  ACOUNT_LOCKED: "423",
  INVALID_VERIFICATION_CODE: "412",
  PASSWORD_RECENTLY_USED: "425",
  VERIFICATION_LOCK_OUT: "415",
  VERIFICATION_CODE_EXPIRE: "414",
  TEMP_PASS_EXPIRE: "NotAuthorizedException",
};

export const INTERNET_CONNECTION_ERROR = {
  CODE: "INTERNET_ERROR",
  MESSAGE: "Please check your internet connection",
};

export const UNKNOWN_ERROR = {
  CODE: "UNKNOWN_ERROR",
  MESSAGE: "Something went wrong",
};

export const IV = '00000000000000000000000000000000'
