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
    return args.some((invocationArgs) => !!invocationArgs && invocationArgs.some((arg) => !!arg &&
        (lowerCaseCompare(arg, message)
        || (arg.message && lowerCaseCompare(arg.message, message))
        || (arg.error && lowerCaseCompare(arg.error, message))
        || (arg.error && arg.error.message && lowerCaseCompare(arg.error.message, message)))));
}

function lowerCaseCompare(str1, str2) {
    return (str1 && str2)
        && (str1.toLowerCase && str2.toLowerCase)
        && (str1.toLowerCase() === str2.toLowerCase());
}

module.exports = messageAppearsInAnyCallArgs;
