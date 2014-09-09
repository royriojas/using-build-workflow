module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    options: {
      someValue: 'Another value'
    },
    task1: {
      options: {
        someValue: 'Another value from local'
      },
      src: [ 'src/**/*.js' ],
      dest: 'dist/'
    },
    task2: {
      options: {
        anotherVariable: 'some different value here'
      },
      src: [ 'src/**/*.js' ],
      dest: 'dist/'
    }
  };
};
