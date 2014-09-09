module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaskUtils = opts.gruntTaskUtils;

  return {
    options: {
      reporter: require( 'jshint-stylish' )
    },
    all: {
      src: [ 'src/**/*.js', 'Gruntfile.js' ]
    }
  };
};
