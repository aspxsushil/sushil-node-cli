#!/usr/bin/env node

const chalk = require('chalk');
console.clear();
const log = console.log;
log(`${chalk.red.bold('SUSHIL GHIMIRE')}
A Software Engineer based in houston.
`);

const packageDetails = require('./package.json');
// import { packageDetails } from './package.json';


log(`
${chalk.hex(`#1DA1F2`).bold.inverse('NAME')} : ${chalk.dim(packageDetails.name)}
${chalk.hex(`#6cc644`).bold.inverse(`VERSION`)}: ${chalk.dim(packageDetails.version)}
${chalk.hex(`#6937FF`).bold.inverse(`REPOSITORY`)}: ${chalk.dim(packageDetails.repository)}

`)