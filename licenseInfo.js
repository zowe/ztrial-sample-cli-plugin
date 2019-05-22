const packages = require('./package.json');
const licenses = require('./licenses.json');

let listDevs = Object.keys(packages["devDependencies"])
let listDeps = Object.keys(packages["dependencies"])
const listPackages = [...listDevs, ...listDeps]

const filtered = Object.keys(licenses)
  .filter(key => listPackages.filter((pkg) => key.startsWith(pkg)).length>0)
  .reduce((obj, key) => {
    obj[key] = licenses[key];
    delete obj[key].path
    return obj;
  }, {});


console.log(JSON.stringify(filtered))