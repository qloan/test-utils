const assert = require('chai').assert;

module.exports = (tryFn, exceptionContains = false, done = () => {}) => {
    let caught = false;

    try {
        tryFn();
    } catch (e) {
        caught = true;

        if (exceptionContains) {
            assert(e.message.indexOf(exceptionContains) !== -1);
        }
    } finally {
        assert(caught, 'Expected "tryFn" to throw');
        done();
    }
};
