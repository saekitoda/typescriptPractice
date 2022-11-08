"use strict";
function getFizzBuzzMessage(i) {
    if (i % 15 === 0) {
        return 'FizzBuzz';
    }
    if (i % 5 === 0) {
        return 'Fizz';
    }
    if (i % 3 === 0) {
        return 'Buzz';
    }
    else {
        return String(i);
    }
}
const sequence = (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(sequence(1, 100));
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzMessage(i);
    console.log(message);
}
/*
for (let i = 0; i < 100; i++) {
    const message = getFizzBuzzMessage(i);
    console.log(message);
}*/
function map(array, callback) {
    const result = [];
    for (const i of array) {
        result.push(callback(i));
    }
    return result;
}
const dataArray = [1, 1, 2, 3, 5, 8, 13];
const result = map(dataArray, (x) => x * 10); // [10, 10, 20, 30, 50, 80, 130] と 表示 さ れる
console.log(result);
