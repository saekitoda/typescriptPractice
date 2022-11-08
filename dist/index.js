"use strict";
/*type User = {
    name: string,
    age: number,
    premiumUser: boolean,
};*/
const data = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
/*
const users : User[] = [];
const dataArr: string[] = data.split(/,|\r\n|\n/);
const dataArr2: string[] = dataArr.filter(
    elm => elm !== ''
);

let i = 0
let user: User = {
    name: '',
    age: 0,
    premiumUser: false
};
for (const d of dataArr2) {
    if (i % 3 == 0) {
        user.name = d;
    }
    if (i % 3 == 1) {
        user.age = Number(d);
    }
    if (i % 3 == 2) {
        if (d === '1') {
            user.premiumUser = true;
        }
        else {
            user.premiumUser = false;
        }
        users.push(user);
        user = {
            name: '',
            age: 0,
            premiumUser: false
        };
    }
    i++
}
console.log(users);

*/
const users = [];
const dataArr = data.split('\n').filter(elm => elm !== '');
console.log(dataArr);
for (const line of dataArr) {
    const [userName, ageStr, PremiumStr] = line.split(',');
    users.push({
        name: userName,
        age: Number(ageStr),
        premiumUser: PremiumStr === '1'
    });
}
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザです。`);
    }
    else {
        console.log(`${user.name} (${user.age})はプレミアムユーザではありません。`);
    }
}
