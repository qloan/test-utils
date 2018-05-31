const sinon = require('sinon');

class SilentLoggerWithSpys {
    constructor(sandbox) {
        if (!sandbox) {
            this.sandbox = sinon.createSandbox();
        } else {
            this.sandbox = sandbox;
        }

        this.info = this.sandbox.spy();
        this.error = this.sandbox.spy();
        this.warn = this.sandbox.spy();

        this.child = function() {
            return new SilentLoggerWithSpys();
        }
    }
}

module.exports = SilentLoggerWithSpys;
