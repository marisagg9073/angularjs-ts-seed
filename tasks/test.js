'use strict';

var PATH = require('./PATH');

var gulp = require('gulp');
var concat = require('gulp-concat');
var ngHtml2Js = require("gulp-ng-html2js");
var plumber = require('gulp-plumber');
var tsc = require('gulp-typescript');
var watch = require('gulp-watch');

var karma = require('karma').server;
var path = require('path');
var join = path.join;

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript')
});

gulp.task('build.html.test', ['clean.test'], function() {
  return gulp.src(PATH.src.html.directive)
    .pipe(ngHtml2Js({
      moduleName: function(file) {
        var pathParts = file.path.split(path.sep),
          root = pathParts.indexOf('components');
        return 'app.' + pathParts.slice(root, -1).map(function(folder) {
          return folder.replace(/-[a-z]/g, function(match) {
            return match.substr(1).toUpperCase();
          });
        }).join('.');
      }
    }))
    .pipe(concat('partials.js'))
    .pipe(gulp.dest(PATH.dest.test.all));
});

gulp.task('build.test', ['build.html.test'], function(done) {
  var result = gulp.src(PATH.src.app.test)
    .pipe(plumber())
    .pipe(tsc(tsProject));

  return result.js
    .pipe(gulp.dest(PATH.dest.test.all));
});

gulp.task('run.karma', ['build.test'], function(done) {
  karma.start({
    configFile: join(__dirname, 'karma.conf.js'),
    singleRun: false
  }, done);
});

gulp.task('test', ['run.karma'], function() {
  watch('./app/**', function() {
    gulp.start('run.karma');
  });
});
