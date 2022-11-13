"use strict";
class RepeatArray extends Array {
    repeat(repeatNum) {
        const result = new RepeatArray();
        for (let i = 0; i < repeatNum; i++) {
            result.push(...this);
        }
        return result;
    }
}
const repeatArr = new RepeatArray();
repeatArr.push(1);
repeatArr.push(2);
console.log(repeatArr.repeat(3));
