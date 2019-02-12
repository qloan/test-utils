const async = require("async");

const mount = (mwArray, req, res, next) => {
  const boundMwArray = mwArray.map(mw => mw.bind(null, req, res));
  async.series(boundMwArray, next);
};

module.exports = {
  mount
};

if (require.main === module) {
  const asyncFn = logMsg => (req, res, next) => {
    setTimeout(() => {
      console.log(logMsg);
      return next();
    }, 500);
  };

  const mwArray = [asyncFn("1"), asyncFn("2"), asyncFn("3"), asyncFn("4")];

  mount(mwArray, {}, {}, err => {
    console.log("I'm done");
  });
}
