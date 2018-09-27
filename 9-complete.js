const infinityGenerator = function*() {
    let counter = 0;
    while (true) {
        const skip = yield counter++;
        if (skip) {
            counter += skip;
        }
    }
};

const infinity = infinityGenerator();
infinity.next();
infinity.next(10);
infinity.next();
infinity.next(-60);
