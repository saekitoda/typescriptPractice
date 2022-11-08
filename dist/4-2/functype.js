"use strict";
const xRepeat = (n) => "s".repeat(n);
/*
const g = (num: number) => {
    for (let i=0; i<num; i++) {
        console.log("hello");
    }
}*/
function range(min, max) {
    const range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = arr.filter(n => n % 3 === 0);
const double = (arg) => arg * 2;
