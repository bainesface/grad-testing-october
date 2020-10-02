const fs = require('fs-extra');

module.exports = fs
  .readdirSync(`${__dirname}/../src/app`)
  .filter(
    dirname => dirname !== '_app' && dirname !== 'stage-backend-complete'
  );
