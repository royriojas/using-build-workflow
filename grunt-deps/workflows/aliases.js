module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  var aliases = {

    'custom-tasks': [
      'brianTask:hello',
      'aakashTask'
    ],

    'default': [
      'clean',
      'jshint', 
      'concat', 
      'uglify',
      'custom-tasks'
    ]
  };

  gruntTaksUtils.registerTasks( aliases );
};
