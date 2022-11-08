function sabayomi(age: number): number {
    if (age >= 20) {
        const lie: number = age + 5;
        return age + 5;
    }
    else return age;
}

console.log(sabayomi(20));

