import { toNamespacedPath } from "path";

type User = {
    name: string,
    age: number,
}

const getName = (u: User) => u.name;
const users: User[] = [
    {name: 'uhyo',age: 26},
    {name: 'td', age: 21},
]

const names: User[] = users.filter((u: User) => u.age <= 25);
console.log(names[0]);
