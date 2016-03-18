'use strict';

var PATH = require('./PATH');

var gulp = require('gulp');
var watch = require('gulp-watch');

var join = require('path').join;
var yargs = require('yargs');

var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var openResource = require('open');

var port = 5555;

// --------------
// Serve dev.

gulp.task('serve.dev', ['build.dev'], function() {
  var app = connect();

  watch('./app/**', function() {
    gulp.start('build.app.dev');
  });

  app.use(serveStatic(join(__dirname, '..', PATH.dest.dev.all)));
  app.use(serveStatic(join(__dirname, '..', 'app')));
  app.listen(port, function() {
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

function serve() {
  var argv = yargs.reset()
    .usage('Usage: gulp serve -p')
    .alias('p', 'prod')
    .boolean('p')
    .describe('p', 'Build for Production Environment and serve')

    .alias('s', 'support')
    .help('s')
    .argv;

  if (argv.prod)
    gulp.start('serve.prod');
  else
    gulp.start('serve.dev');
}

serve.description = 'Build for either Development or the requested environment and serve';

serve.flags = {
  '-p, --prod': 'Build for Production Environment',
  '-s, --support': 'Show help'
};


gulp.task('serve', serve);
