'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');

var paths = ['gulpfile.js', 'index.js', 'test/**/*.js'];

gulp.task('jscheck', function() {
  gulp.src(paths)
    .pipe(jscs())
    .pipe(jshint({
        maxlen: 80,
        quotmark: 'single'
      }))
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  gulp.src(['test/**/*.js'])
    .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch(paths, ['default']);
});

gulp.task('default', ['jscheck', 'test']);
