"use strict";
const repeat = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat('toda', 5));
/*
const utils = {
    repeat<T>(element: T, length: number): T[] {
        const result: T[] = [];
    
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }
}
*/
/*
const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];

console.log(pair<string, number>('aiueo', 2));
*/ 
