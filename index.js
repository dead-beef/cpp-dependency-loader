const util = require('util');
const child_process = require('child_process');
const execFile = util.promisify(child_process.execFile);

module.exports = async function loader(content) {
  const cb = this.async();
  try {
    //console.log('query', this.query);
    let emcc = 'emcc';
    if (typeof this.query === 'object' && this.query.emccPath) {
      emcc = this.query.emccPath;
    }
    const { stdout } = await execFile(emcc, ['-MM', this.resourcePath]);
    const deps = stdout.split(/:?\s+\\?\s*/).filter((fname, i) => (
      i > 0 &&
      fname.length > 0 &&
      fname !== this.resourcePath
    ));
    //console.log('deps', deps);
    for (let fname of deps) {
      this.dependency(fname);
    }
    cb(null, content);
  } catch(err) {
    cb(err);
  }
};
