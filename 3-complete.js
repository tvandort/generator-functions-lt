const generatorFn = function* () {}

const generator = generatorFn();

for (let keys of generator) {
    console.log(keys);
}
