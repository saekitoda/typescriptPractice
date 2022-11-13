"use strict";
/*type User = {
    name: string;
    age: number;
}

function creageUser(name: string, age: number): User {
    if (name === '') {
        throw new Error
    } else {
        return {name, age};
    }
}

function getMessage(user: User, message: string): string {
    return `${user.name}(${user.age})「${message}」`
}
*/
class User {
    constructor(name, age) {
        if (name === '') {
            throw new Error;
        }
        else {
            this.name = name;
            this.age = age;
        }
    }
    getMessage(message) {
        return `${this.name}(${this.age})「${message}」`;
    }
}
const getMessage = createUser('toda', 26);
console.log(getMessage('こんにちは'));
function createUser(name, age) {
    if (name === '') {
        throw new Error();
    }
    else {
        return (message) => `${name}(${age})「${message}」`;
    }
}
