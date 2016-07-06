'use strict';

const gulp     = require('gulp');
// const sass     = require('gulp-sass');
// const sassGlob = require('gulp-sass-glob');
const del      = require('del');

const fractal  = require('./fractal.js');
const console = fractal.cli.console;

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => console.error(err.message));
    return server.start().then(() => {
        console.success(`Fractal server is now running at ${server.urls.sync.local}`);
    });
});

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => console.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => console.error(err.message));
    return builder.build().then(() => {
        console.success('Fractal build completed!');
    });
});

// gulp.task('css:process', function() {
//   return gulp.src('assets/css/main.scss')
//     .pipe(sassGlob())
//     .pipe(sass())
//     .pipe(gulp.dest('public/css'));
// });
//
// gulp.task('css:clean', function() {
//     return del(['public/css']);
// });
//
// gulp.task('css:watch', function () {
//     gulp.watch([
//         'assets/css/**/*.scss',
//         'components/**/*.scss'
//     ], gulp.series('css'));
// });
//
// gulp.task('css', gulp.series('css:clean', 'css:process'));
//
// gulp.task('default', gulp.parallel('css'));
// gulp.task('watch', gulp.parallel('css:watch'));
