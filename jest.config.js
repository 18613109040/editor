const { readdirSync } = require('fs');
const { join } = require('path');

const pkgList = readdirSync(join(__dirname, './packages')).filter((pkg) => pkg.charAt(0) !== '.');

const moduleNameMapper = {};

pkgList.forEach((shortName) => {
  moduleNameMapper[shortName] = join(__dirname, `./packages/${shortName}/src`);
});

module.exports = {
  moduleNameMapper,
  testURL: 'http://localhost',
  verbose: true,
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  // extraSetupFiles: ['./tests/setupTests.js'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
  },
};
