import { toNamespacedPath } from "path";

function range(min: number, max: number): number[] {
    const range: number[] = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range
}

function hello(n: number): void {
    if (n >= 100) {
        console.log(`${n}回なんて無理です`)
        return
    }

    for (let i=1; i <= n; i++) {
        console.log('hello');
    }
}

type Human = {
    name: string,
    height: number,
    weight: number,
}

type RetObj = {
    name: string,
    bmi: number
}
/*
const calcBMI = function ({weight, height}: Human): number {
    return weight / height**2
}*/

/*
const calcBMI = ({weight, height}: Human): number => {
    return weight / height**2
}*/


const calcBMI = ({name, weight, height}: Human): RetObj => ({
    name: name,
    bmi: weight / height**2
})


const toda: Human = {
    name: 'toda',
    height: 1.67,
    weight: 67
}

const obj =  {
    double(n: number): number {
        return n * 2;
    },
    double2: (n: number): number => n * 2
};

const sum = (n1: number, ...args: number[]): number => {
    let result: number = 0;
    for (const n of args) {
        result += n;
    }
    result *= n1;
    return result;
}

const numArr: [number, number, number] = [1, 2, 3];

const sum3 = (a: number, b:number, c:number): number => a + b + c;

const toLowerOrUpper = (str: string, upper: boolean = false): string => {
    if(upper) {
        return str.toUpperCase()
    }
    else {
        return str.toLowerCase()
    }
}

console.log(toLowerOrUpper('aiueo'));

