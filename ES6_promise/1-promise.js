/*
Using the prototype getFullResponseFromAPI(success), return a promise.
The parameter is a boolean.
When the argument is:
-true:
  resolve the promise by passing:
    status: 200
    body: 'Success'
-false:
  reject the promise with an error object with the message
  "The fake API is not working currently"
*/
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
