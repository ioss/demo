'use strict';

const fractal = require('@frctl/fractal');

fractal.set('project.title', 'Fractal Demo');

fractal.set('docs.path', `${__dirname}/docs`);

fractal.set('components.path', `${__dirname}/src`);
fractal.set('components.default.preview', '@skeleton');

fractal.set('plugins.web.static.path', `${__dirname}/public`);

fractal.engine('handlebars', '@frctl/handlebars-adapter', {
    loadHelpers: true
});

fractal.set('themes.mandelbrot.skin', 'maroon');

fractal.plugin('@allmarkedup/fractal-gulp-plugin', {
    gulp: require('./gulpfile')
});

module.exports = fractal;
