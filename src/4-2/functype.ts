type F = (repeatNum: number) => number;

const xRepeat = (n: number) => "s".repeat(n);
/*
const g = (num: number) => {
    for (let i=0; i<num; i++) {
        console.log("hello");
    }
}*/

function range(min: number, max: number): number[] {
    const range: number[] = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = arr.filter(n => n % 3 === 0);

//const f: F = num => num * 2

type MyFunc = {
    isUsed?: Boolean,
    (arg: number): void
};

const double: MyFunc = (arg: number) => arg * 2;

