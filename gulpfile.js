/* jshint node:true */
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var coveralls = require('gulp-coveralls');
var plumber = require('gulp-plumber');

gulp.task('pre-test', function () {
  return gulp.src(['scripts/views/*.js', 'scripts/init.js', 'scripts/main.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .pipe(gulp.dest('test-tmp/'));
});

gulp.task('test', ['pre-test'], function () {
  gulp.src('test/spec/*.js')
    .pipe(plumber())
    .pipe(mocha())
    .pipe(istanbul.writeReports());
});

gulp.task('coveralls', ['test'], function () {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

var handleErr = function (err) {
  console.log(err.message);
  process.exit(1);
};

gulp.task('jshint', function () {
  return gulp.src(['scripts/views/*.js', 'scripts/init.js', 'scripts/main.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(jscs())
    .on('error', handleErr);
});

gulp.task('connect', function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic('./'))
    .use(serveIndex('./'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('serve', ['connect', 'watch'], function () {
  require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect'], function () {
  $.livereload.listen();

  gulp.watch([
    'index.html',
    'app/scripts/**/*.js',
    'app/images/**/*'
  ]).on('change', $.livereload.changed);
});

gulp.task('default', ['jshint', 'test', 'coveralls'], function () {

});
