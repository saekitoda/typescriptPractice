"use strict";
/*
class User implements hasName {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age > 20;
    }

    public filterOlder(userArr: User[]): User[] {
        const result: User[] = userArr.filter(
            (user) => user.age > this.age
        )
        return result;
    }
}

class PremiumUser extends User {
    rank: number;

    constructor(name: string, age: number, rank: number) {
        super(name, age);
        this.rank = rank;
    }

    public override isAdult(): boolean {
        return this.age >= 25;
    }
}

function getName(user: User): string {
    return `こんにちは、${user.name}さん`
}

const user1 = new User('user1', 30);
const user2 = new User('user1', 40);

const toda = new User('toda', 20);
const pToda = new PremiumUser('ptoda', 23, 1);

const userArr: User[] = [user1, user2, toda, pToda];

console.log(user1.isAdult());
console.log(user1.isAdult.apply(toda, []));

*/
