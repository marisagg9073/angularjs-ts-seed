'use strict';

var PATH = require('./PATH');

var gulp = require('gulp');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var template = require('gulp-template');

var join = require('path').join;
var yargs = require('yargs');

gulp.task('component', () => {
  var cap = function(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  var name = yargs.argv.name;
  var parentPath = yargs.argv.parent || '';
  var destPath = join(resolveToComponents(), parentPath, name);

  return gulp.src(PATH.src.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath))
    .pipe(notify({
      message: 'Component files generated in <%= options.folder %>.',
      templateOptions: {
        folder: destPath
      },
      onLast: true
    })).pipe(notify({
      message: 'Remember to register the new ngModule in <%= options.collector %>.',
      templateOptions: {
        collector: resolveToComponents() + ' > components.ts'
      },
      onLast: true
    }));
});

function resolveToComponents(glob) {
  return join(__dirname, '..', 'app/components', glob || '');
}
