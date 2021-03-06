const { AfterAll, BeforeAll, Before } = require('cucumber');
const detox = require('detox');
const packageJSON = require('../../package.json');

BeforeAll({ timeout: 60 * 1000 }, () => {
  const config = packageJSON.detox;

  const isRelease =
    process.env.npm_lifecycle_event &&
    process.env.npm_lifecycle_event.includes('release');

  const configToDelete = isRelease ? 'ios.sim' : 'ios.sim.release';

  delete config.configurations[configToDelete];

  return detox.init(packageJSON.detox, {
    initGlobals: false,
    launchApp: true,
  });
});

AfterAll(() => detox.cleanup());

Before((scenario) => {
  let feature = scenario.sourceLocation.uri;
  feature = feature.replace('features/', '');
  feature = feature.replace('.feature', '');

  global.scenario = scenario;

  global.feature = {
    name: feature,
    uri: scenario.sourceLocation.uri,
  };
});
