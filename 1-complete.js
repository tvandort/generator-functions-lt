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
