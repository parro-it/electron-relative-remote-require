'use stritct';

const resolve = require('resolve-from-caller');
const remote = require('electron').remote;

module.exports = function remoteRequire(module) {
	return remote.require(resolve(module));
};
