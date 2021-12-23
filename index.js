#!/usr/bin/env node
console.clear();
console.log(`Sushil Ghimire
A Software Engineer based in houston.
`);

const packageDetails = require('./package.json');
console.log(`
NAME : ${packageDetails.name}
VERSION: ${packageDetails.version}

`)