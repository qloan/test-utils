const log = {
    dir: arguments => console.dir(arguments, { depth: null, colors: true }),
    info: arguments => {
        if (arguments && typeof arguments[0] === 'object') {
            return log.dir(arguments);
        }

        return console.info(arguments);
    },
    error: arguments => console.error(arguments),
    warn: arguments => console.log(arguments),
};

module.exports = log;
