type Animal = {
    species: string;
}

type Human = {
    name: string;
    age?: number;
}

function getAnimal(animal: Animal) {
    return animal.species;
}

function getHuman(human: Human) {
    return human.name;
}

const toda: Human = {
    name: 'toda'
}

const beast: Human & Animal = {
    species: "human and beast",
    name: 'toda'
}

type GetTimeFunc = () => Date;

function maybeGetTime(getTimeFunc: GetTimeFunc | undefined) {
    const result = getTimeFunc?.()
}

function maybeHumanFunc(human: Human | undefined): string | undefined {
    return human?.name
}
console.log(toda.age);