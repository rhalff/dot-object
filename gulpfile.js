var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');

var paths = ['gulpfile.js', 'index.js', 'tests/**/*.js'];

var pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './package.json'))
);

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

gulp.task('default', function () {
  gulp.run('jshint:app', 'test');
});
