function range(min, max) {
    const range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}
function hello(n) {
    if (n >= 100) {
        console.log(`${n}回なんて無理です`);
        return;
    }
    for (let i = 1; i <= n; i++) {
        console.log('hello');
    }
}
/*
const calcBMI = function ({weight, height}: Human): number {
    return weight / height**2
}*/
/*
const calcBMI = ({weight, height}: Human): number => {
    return weight / height**2
}*/
const calcBMI = ({ name, weight, height }) => ({
    name: name,
    bmi: weight / height ** 2
});
const toda = {
    name: 'toda',
    height: 1.67,
    weight: 67
};
const obj = {
    double(n) {
        return n * 2;
    },
    double2: (n) => n * 2
};
const sum = (n1, ...args) => {
    let result = 0;
    for (const n of args) {
        result += n;
    }
    result *= n1;
    return result;
};
const numArr = [1, 2, 3];
const sum3 = (a, b, c) => a + b + c;
const toLowerOrUpper = (str, upper = false) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper('aiueo'));
export {};
