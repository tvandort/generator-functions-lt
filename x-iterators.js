const animals = ["Dog", "Cat", "Bird"];
for (let animal of animals) console.log(animal);

const iterable = () => {
    let counter = 0;
    return {
        [Symbol.iterator]: () => ({
            next: () => ({
                done: counter > 5,
                value: counter++
            })
        })
    };
};

const iterator = iterable();

for (let iteration of iterator) console.log(iteration);
