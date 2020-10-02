const {
  introduction00,
  introduction01,
  introduction02,
} = require('./routes/introduction');
const stage01 = require('./routes/stage-01');
const stage02 = require('./routes/stage-02');
const stage03 = require('./routes/stage-03');
const stage04 = require('./routes/stage-04');
const stage05 = require('./routes/stage-05');
const stage06 = require('./routes/stage-06');
const stage07 = require('./routes/stage-07');
const stage08 = require('./routes/stage-08');
const stage09 = require('./routes/stage-09');
const stage10 = require('./routes/stage-10');
const stage11 = require('./routes/stage-11');

const { NotFound } = require('./NotFound');

const notFound = {
  name: 'Not Found',
  path: '*',
  component: NotFound,
};

export const routes = [
  introduction00,
  introduction01,
  introduction02,
  stage01,
  stage02,
  stage03,
  stage04,
  stage05,
  stage06,
  stage07,
  stage08,
  stage09,
  stage10,
  stage11,
  notFound,
]
  .filter(({ name }) => Boolean(name))
  .map(({ items = [], ...route }) => ({ items, ...route }));
