const generatorFn = function*() {
    yield "Dog";
    yield "Cat";
    // return "Bird";
};

const generator = generatorFn();
generator.next();
generator.next();
generator.next();
