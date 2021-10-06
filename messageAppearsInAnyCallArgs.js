/**
 * Returns true if message is used as a callArg explicitly or found within the .message property
 * of a callArg (e.g., as with an Error object).
 * @param {object|array} callArgs Sinon spy or stub, or .args multidimensional array from a sinon spy or stub.
 * @param {string} message String to find within callArgs.
 * @returns {boolean} boolean
 */
 function messageAppearsInAnyCallArgs(callArgs = [], message) {
    let args = callArgs;
    if (callArgs.hasOwnProperty('args')) {
        args = callArgs.args;
    }
    return args.some((invocationArgs) => invocationArgs.some((arg) => (arg === message)
                || (arg.message && arg.message === message)
                || (arg.error && arg.error === message)
                || (arg.error && arg.error.message && arg.error.message === message)));
}

module.exports = messageAppearsInAnyCallArgs;
