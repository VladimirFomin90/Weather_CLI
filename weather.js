#!/usr/bin/env node
import { getArgs } from "./help/args.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // help
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // save token
    }
	// print weather
};

initCLI();
