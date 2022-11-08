const getName = (u) => u.name;
const users = [
    { name: 'uhyo', age: 26 },
    { name: 'td', age: 21 },
];
const names = users.filter((u) => u.age <= 25);
console.log(names[0]);
export {};
