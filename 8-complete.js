const infiniteGenerator = function*() {
    let counter = 0;
    while (true) {
        yield counter++;
    }
};

const infinity = infiniteGenerator();

infinity.next();
// infinity.next();
// infinity.next();
// infinity.next();
// infinity.next();
