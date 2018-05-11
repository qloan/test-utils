const assert = require('chai').assert;

module.exports = (tryFn, exceptionContains) => {
    let caught;

    try {
        tryFn();
    } catch (e) {
        caught = true;
        assert(e.message.indexOf(exceptionContains) !== -1);
    } finally {
        assert(caught, 'Expected "tryFn" to throw');
    }
};
