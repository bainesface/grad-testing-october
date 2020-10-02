const endpoints = require('./endpoints');

const fakeDelay = fn => setTimeout(fn, 1000);
const delayedResponse = (code, res) => fakeDelay(() => res.status(code).send());

module.exports = (req, res, next) => {
  const { statusCode } = endpoints[req.path] || {};

  if (statusCode) {
    return delayedResponse(statusCode, res);
  }

  fakeDelay(next);
};
