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
    lib: {
      js: [
        './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js',
        './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js.map',
        './node_modules/systemjs/dist/system.src.js',
        './node_modules/angular/angular.js',
        './node_modules/angular-new-router/dist/router.es5.js',
        './node_modules/angular-aria/angular-aria.js',
        './node_modules/angular-animate/angular-animate.js',
        './node_modules/angular-messages/angular-messages.js',
        './node_modules/angular-material/angular-material.js',
        './node_modules/angular-ui-router/release/angular-ui-router.js',
        './node_modules/angular-cookies/angular-cookies.js',
        // './node_modules/angular-touch/angular-touch.js',
        './node_modules/angular-sanitize/angular-sanitize.js',

        './node_modules/d3/d3.js',
        './node_modules/nvd3/build/nv.d3.js',
        './node_modules/angular-nvd3/dist/angular-nvd3.js'
      ],
      css: [
        './node_modules/angular-material/angular-material.css',
        './node_modules/nvd3/build/nv.d3.css',
      ]
    },
    blankTemplates: join(__dirname, '..', 'generator', 'component/**/*.**'),
    html: {
      all: ['./app/**/*.html'],
      directive: ['./app/components/**/*.{directive,component,tpl}.html']
    }
  }
};
