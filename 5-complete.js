const generatorFn = function*() {
    yield "Dog";
    // yield "Cat";
};

const generator = generatorFn();
generator.next();
generator.next();
// generator.next();
