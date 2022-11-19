"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./person/Person");
var testMakeperson = function () {
    var jane = (0, Person_1.makePerson)("Jane");
    var jack = (0, Person_1.makePerson)("Jack");
    console.log(jane, jack);
};
testMakeperson();
