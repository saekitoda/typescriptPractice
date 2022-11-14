"use strict";
function getAnimal(animal) {
    return animal.species;
}
function getHuman(human) {
    return human.name;
}
const toda = {
    name: 'toda'
};
const beast = {
    species: "human and beast",
    name: 'toda'
};
function maybeGetTime(getTimeFunc) {
    const result = getTimeFunc?.();
}
function maybeHumanFunc(human) {
    return human?.name;
}
console.log(toda.age);
