type hasAge = {
    age: number
}
/*
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function getPrice(user: hasAge): number {
    if (user instanceof User) {
        if (user.name === 'toda') {
            return 0
        }
    }
    return user.age > 18 ? 1000 : 1800;     
}

const user1 = {
    age: 20
}

const user2 = {
    age: 10
}

const toda = new User('toda', 20);

console.log(getPrice(user1));
console.log(getPrice(user2));
console.log(getPrice(toda));