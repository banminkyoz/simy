#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const simy = require('.');

const cli = meow(`
  Options
    --date ${chalk.green('Get first time we met')}
    --detail ${chalk.green('Get detail since i met you')}
`);

console.log(cli.flags.date ? chalk.green(simy.getFirstTimeMet()) :
  cli.flags.full ? chalk.green(JSON.stringify(simy.getSinceIMetYouDetail())) :
    chalk.green(simy.getSinceIMetYou()));
