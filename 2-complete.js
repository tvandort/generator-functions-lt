const normalFunction = function() {};
const generatorFunction = function*() {};

const normalResult = normalFunction();
const generatorResult = generatorFunction();

console.log(normalResult);
console.log(generatorResult);
