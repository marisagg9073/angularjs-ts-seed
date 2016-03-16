var join = require('path').join;

module.exports = {
  dest: {
    all: 'dist',
    dev: {
      all: 'dist/dev',
      lib: 'dist/dev/lib'
    },
    test: {
      all: 'test'
    },
    prod: {
      all: 'dist/prod',
      lib: 'dist/prod/lib'
    }
  },
  src: {
    app: {
      all: ['./app/**/*.ts'],
      dev: ['./app/**/*.ts', '!./app/**/*.spec.ts'],
      test: ['./app/**/*.ts', '!./app/init.ts']
    },
    // Order is quite important here for the HTML tag injection.
    lib: [
      './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js',
      './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js.map',
      './node_modules/systemjs/dist/system.src.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-new-router/dist/router.es5.js'
    ],
    blankTemplates: join(__dirname, '..', 'generator', 'component/**/*.**'),
    html: {
      all: ['./app/**/*.html'],
      directive: ['./app/components/**/*.{directive,tpl}.html']
    }
  }
};
