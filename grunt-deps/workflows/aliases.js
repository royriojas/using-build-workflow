module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  var aliases = {
    'default': [
      'jshint', 
      'concat', 
      'uglify', 
      'brianTask:hello', 
      'aakashTask'
    ]
  };

  gruntTaksUtils.registerTasks( aliases );
};
