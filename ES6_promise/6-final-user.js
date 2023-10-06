/*
Import:
  -signUpUser from 4-user-promise.js
  -uploadPhoto from 5-photo-reject.js.
Write and export a function named handleProfileSignup.
Accepts three arguments:
  -firstName (string),
  -lastName (string),
  -fileName (string).
The function
should call the two other functions. When the promises are
all settled it should return an array with the following structure:
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
*/
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((results) => results);
}

export default handleProfileSignup;
