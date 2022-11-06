"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakeperson = exports.makePerson = void 0;
function makePerson(name, age) {
    return { name: name, age: age };
}
exports.makePerson = makePerson;
function testMakeperson() {
    console.log(makePerson('Jane', 22), makePerson('Jack', 33));
}
exports.testMakeperson = testMakeperson;
//# sourceMappingURL=makePerson.js.map