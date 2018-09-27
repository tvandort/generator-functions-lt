const generatorFn = function*(secondAnimal) {
    yield "Dog";
    yield secondAnimal;
};

const generator = generatorFn("Cat");
generator.next();
generator.next();
