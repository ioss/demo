'use strict';

/*
 * This file is not required for Fractal projects - it's just an example of
 * how you can use Fractal without the command line helper.
 *
 * In this example you could run this file using the command `node index.js`
 * and it would start a new instance of the web UI server.
 */

const fractal = require('./fractal');

fractal.exec('start'); // run the fractal `start` command.
