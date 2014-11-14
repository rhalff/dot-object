'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var paths = ['gulpfile.js', 'index.js', 'tests/**/*.js'];

gulp.task('jshint:app', function () {
  gulp.src(paths)
    .pipe(jshint({
        maxlen: 80,
        quotmark: 'single'
      }))
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
  gulp.src(['test/**/*.js'])
    .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch(paths, ['default']);
});

gulp.task('default', ['jshint:app', 'test']);
