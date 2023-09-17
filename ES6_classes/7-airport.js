/*
Implement a class named Airport.
Constructor attributes:
name (String)
code (String)
Each attribute must be stored in an “underscore” attribute version
(ex: name is stored in _name)
The default string description of the class should return
the airport code.
*/
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
