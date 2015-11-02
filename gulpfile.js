/* jshint node:true */
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('test', function () {
  return gulp.src('test/spec/*.js')
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports());
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

gulp.task('build', ['jshint', 'test'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', function () {
  gulp.start('build');
});
