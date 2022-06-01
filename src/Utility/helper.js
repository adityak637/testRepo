
const isNullOrUndefined = (entity) => {
  if (entity === undefined || entity === "undefined" || entity === "" || entity === null || (typeof entity === 'object' && Object.keys(entity).length === 0)) {
    return true;
  }
}


/**
 * to format the string
 * @param {*} value 
 * @returns 
 */
const stringFormat = (value) =>{
   return value.replace(/\s/g, '');
}

  export { isNullOrUndefined, stringFormat };