/*
Using the prototype:
function signUpUser(firstName, lastName) {
}
Returns a resolved promise with this object:
{
  firstName: value,
  lastName: value,
}
*/
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

export default signUpUser;
