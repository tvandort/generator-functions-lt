const createGenerator = function*() {
    console.log("Before first yield.");
    yield "foo";
    console.log("Before second yield.");
    yield "bar";
};

const generator = createGenerator();
console.log("one");
console.log(generator.next().value);
console.log("two");
console.log(generator.next().value);
console.log("three");
console.log(generator.next().value);

const createInfiniteGenerator = function*() {
    let number = 0;
    while (true) {
        yield number++;
    }
};

const infiniteGenerator = createInfiniteGenerator();
infiniteGenerator.next();
infiniteGenerator.next();
infiniteGenerator.next();
infiniteGenerator.next();
infiniteGenerator.next();
infiniteGenerator.next();
infiniteGenerator.next();
infiniteGenerator.next();
