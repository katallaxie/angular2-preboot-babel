const path = require('path');
const fs = require('fs');

const _root = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
  return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

function tryDll(manifests) {
  toSpawn(() => manifests
    .forEach(manifest => {
      fs.accessSync(`dll/${manifest}-manifest.json`);
    }), 'dll');
}

function toSpawn(cb, task) {
  try {
    cb();
  } catch (e) {
    const spawn = require('cross-spawn');
    spawn.sync('npm', ['run', task], { stdio: 'inherit' });
    return true;
  }
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.tryDll = tryDll;
exports.toSpawn = toSpawn;
