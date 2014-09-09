module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    options: {
      separator: ';'
    },
    dist: {
      src: ['src/**/*.js'],
      dest: 'dist/out.js'
    }
  };
};
