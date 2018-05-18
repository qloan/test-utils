const assert = require('chai').assert;

module.exports = async (tryFn, exceptionContains = false, done = () => {}) => {
    let caught = false;

    try {
        await tryFn();
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
