
export function fetchWrapper(url, method, bodyData) {
  return fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: bodyData ? JSON.stringify(bodyData) : null,
  }).then((res) => {
    return res.json();
  }).then((response) => {
    return response;
  }).catch((err) => {
    return err;
  })
}
