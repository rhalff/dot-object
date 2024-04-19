'use strict'

const gulp = require('gulp')
const gutil = require('gulp-util')
const mocha = require('gulp-mocha')
const hf = require('gulp-headerfooter')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const beautify = require('gulp-beautify')
const eslint = require('gulp-eslint')

const DEST = 'dist/'

const paths = ['gulpfile.js', 'src/dot-object.js', 'test/**/*.js']

gulp.task('lint', function (done) {
  gulp.src(paths)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  done()
})

gulp.task('mocha', function (done) {
  gulp.src(['test/**/*.js'])
    .pipe(mocha())
    .on('error', gutil.log)
  done()
})

gulp.task('watch', function () {
  gulp.watch(paths, gulp.series('build-node', 'mocha'))
})

gulp.task('build-node', function (done) {
  gulp.src('src/dot-object.js')
    .pipe(hf.footer('\nmodule.exports = DotObject\n'))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('./'))
  done()
})

gulp.task('build-bower', function (done) {
  gulp.src('src/dot-object.js')
    .pipe(hf.header('src/header.tpl'))
    .pipe(hf.footer('src/footer.tpl'))
    .pipe(beautify({ indentSize: 2 }))
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST))
  done()
})

gulp.task('dist', gulp.parallel('lint', 'build-node', 'mocha', 'build-bower'))

gulp.task('test', gulp.parallel('lint', 'build-node', 'mocha'))

gulp.task('default', gulp.parallel('test'))
