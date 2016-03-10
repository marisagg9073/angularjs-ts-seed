'use strict';

var PATH = require('./PATH');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var tsc = require('gulp-typescript');
var watch = require('gulp-watch');

var karma = require('karma').server;
var join = require('path').join;

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript')
});

gulp.task('build.test', ['clean.test'], function(done) {
  var result = gulp.src(PATH.src.app.test)
    .pipe(plumber())
    .pipe(tsc(tsProject));

  return result.js
    .pipe(gulp.dest('./test'));
});

gulp.task('run.karma', ['build.test'], function(done) {
  karma.start({
    configFile: join(__dirname, 'karma.conf.js'),
    singleRun: true
  }, done);
});

gulp.task('test', ['run.karma'], function() {
  watch('./app/**', function() {
    gulp.start('run.karma');
  });
});
