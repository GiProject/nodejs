#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { DateTime } = require('luxon');

const date = DateTime.now();
yargs(hideBin(process.argv))
    .command(
        "current [--year|-y] [--month|-m] [--day|-d]",
		"print current date in ISO format",
        (yargs) => {
            return yargs
                .option('year', {
                    alias: "y",
					describe: "year",
					type: "boolean",
                })
                .option('month', {
                    alias: "m",
					describe: "month",
					type: "boolean",
                })
                .option('date', {
                    alias: "d",
					describe: "day",
					type: "boolean",
                })
        },
        (argv) => {
            switch (true) {
                case argv['year']: {
                    console.info(date.toFormat('yyyy'))
                    break;
                }
                case argv['month']: {
                    console.info(date.toFormat('MM'))
                    break;
                }
                case argv['date']: {
                    console.info(date.toFormat('dd'))
                    break;
                }
                default: {
                    console.info(date.toISO())
                }
            }
        }
    ).command(
        "add [--year|-y] [--month|-m] [--day|-d]",
        "plus date and print",
        (yargs) => {
            return yargs
                .option('year', {
                    alias: 'y',
                    describe: 'year',
                    type: "number"
                })
                .option('month', {
                    alias: 'm',
                    describe: 'month',
                    type: "number"
                })
                .option('day', {
                    alias: 'd',
                    describe: 'day',
                    type: "number"
                })
        },
        (argv) => {
            switch (true) {
                case !!argv['year']: {
                    console.info(date.plus({year: argv['year']}).toISO())
                    break;
                }
                case !!argv['month']: {
                    console.info(date.plus({month: argv['month']}).toISO())
                    break;
                }
                case !!argv['day']: {
                    console.info(date.plus({day: argv['day']}).toISO())
                    break;
                }
                default: {
                    console.info(date.toISO())
                }
            }
        }
    ).command(
        "sub [--year|-y] [--month|-m] [--day|-d]",
        "sub date and print",
        (yargs) => {
            return yargs
                .option('year', {
                    alias: 'y',
                    describe: 'year',
                    type: "number"
                })
                .option('month', {
                    alias: 'm',
                    describe: 'month',
                    type: "number"
                })
                .option('day', {
                    alias: 'd',
                    describe: 'day',
                    type: "number"
                })
        },
        (argv) => {
            switch (true) {
                case !!argv['year']: {
                    console.info(date.minus({year: argv['year']}).toISO())
                    break;
                }
                case !!argv['month']: {
                    console.info(date.minus({month: argv['month']}).toISO())
                    break;
                }
                case !!argv['day']: {
                    console.info(date.minus({day: argv['day']}).toISO())
                    break;
                }
                default: {
                    console.info(date.toISO())
                }
            }
        }
    ).argv




