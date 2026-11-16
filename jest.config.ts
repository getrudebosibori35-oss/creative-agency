

const {defineConfig} = require('jest');
const {defaults} = require('jest-config');

module.exports = defineConfig({
  moduleDirectories: [...defaults.moduleDirectories, 'bower_components'],
});