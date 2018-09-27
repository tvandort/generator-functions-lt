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
