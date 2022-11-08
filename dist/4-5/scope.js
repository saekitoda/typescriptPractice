"use strict";
function sabayomi(age) {
    if (age >= 20) {
        const lie = age + 5;
        return age + 5;
    }
    else
        return age;
}
console.log(sabayomi(20));
