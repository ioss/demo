'use strict';

const fractal = require('@frctl/fractal');

/*
 * General project configuration.
 */

fractal.set('project.title', 'Fractal Demo');

/*
 * Configure components.
 *
 * The components use Handlebars templates by default, however in
 * this example we are expicitly loading the handlebars adapter so that we can
 * pass in some custom configuration. In this case it's to autoload
 * the optional Fractal Handlebars helper library (https://github.com/frctl/handlebars-helpers).
 *
 */

fractal.set('components.path', `${__dirname}/src`);
fractal.set('components.default.preview', '@skeleton');

fractal.engine('handlebars', '@frctl/handlebars-adapter', {
    loadHelpers: true
});

/*
 * Configure docs.
 *
 * In this example we are going to use Nunjucks () as a templating engine for
 * our documentation pages, instead of Handlebars (the default).
 * See https://github.com/frctl/nunjucks-adapter for more details on using Nunjucks with Fractal.
 */

fractal.set('docs.path', `${__dirname}/docs`);
fractal.set('docs.engine', `nunjucks`);

fractal.engine('nunjucks', '@frctl/nunjucks-adapter');

/*
 * Configure the web interface.
 */

fractal.set('plugins.web.static.path', `${__dirname}/public`);
fractal.set('themes.mandelbrot.skin', 'maroon');

/*
 * Add some other useful plugins
 */

fractal.plugin('@allmarkedup/fractal-gulp-plugin', {
    gulp: require('./gulpfile')
});

/*
 * Export the Fractal instance so it can be require'd by other modules if needed.
 */

module.exports = fractal;
