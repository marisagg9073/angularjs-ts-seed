'use strict';

var PATH = require('./PATH');

var gulp = require('gulp');
var concat = require('gulp-concat');
var ngHtml2Js = require("gulp-ng-html2js");
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var watch = require('gulp-watch');

var karma = require('karma').server;
var path = require('path');
var join = path.join;
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

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
    .pipe(sourcemaps.init({ debug: true }))
    .pipe(tsc(tsProject));

  return result.js
    .pipe(sourcemaps.write('../test/maps', {
      includeContent: false,
      sourceRoot: function(file) {
        console.log(file.path);
        var pathParts = file.path.split(path.sep),
          root = pathParts.indexOf('app') - 1;
        return pathParts.slice(root, -1).map(function() { return '..'; }).concat('app').join('/');
      }
    }))
    .pipe(gulp.dest(PATH.dest.test.all));
});

gulp.task('run.karma', ['build.test'], function(done) {
  karma.start({
    configFile: join(__dirname, 'karma.conf.js'),
    singleRun: true
  }, karmaDone);

  function karmaDone(exitCode) {
    console.log('Test Done with exit code: ' + exitCode);
    remapCoverage();
    if (exitCode === 0) {
      done();
    } else {
      done('Unit test failed.');
    }
  }
});

gulp.task('test', ['run.karma'], function() {
  watch('./app/**', function() {
    gulp.start('run.karma');
  });
});

function remapCoverage() {
  console.log('Remapping coverage to TypeScript format...');
  var report = PATH.dest.test.report;
  gulp.src(join(report, 'report-json/coverage-final.json'))
    .pipe(remapIstanbul({
      reports: {
        'lcovonly': join(report, 'remap/lcov.info'),
        'json': join(report, 'remap/coverage.json'),
        'html': join(report, 'remap/html-report'),
        'text-summary': join(report, 'remap/text-summary.txt')
      }
    }))
    .on('finish', function() {
      console.log('Remapping done! View the result in report/remap/html-report');
    });
}
