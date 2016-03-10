'use strict';

var PATH = require('./PATH');

var gulp = require('gulp');
var watch = require('gulp-watch');

var join = require('path').join;

var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var openResource = require('open');

var port = 5555;

// --------------
// Serve dev.

gulp.task('serve.dev', ['build.dev'], function() {
  var app;

  watch('./app/**', function() {
    gulp.start('build.app.dev');
  });

  app = connect().use(serveStatic(join(__dirname, '..', PATH.dest.dev.all)));
  http.createServer(app).listen(port, function() {
    openResource('http://localhost:' + port);
  });
});

// --------------
// Serve prod.

gulp.task('serve.prod', ['build.prod'], function() {
  var app;

  watch('./app/**', function() {
    gulp.start('build.app.prod');
  });

  app = connect().use(serveStatic(join(__dirname, '..', PATH.dest.prod.all)));
  http.createServer(app).listen(port, function() {
    openResource('http://localhost:' + port);
  });
});
