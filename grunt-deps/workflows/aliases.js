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
      'check-valid',
      'target:js-demo',
      'target:css-demo',
      'custom-tasks'
    ]
  };

  gruntTaksUtils.registerTasks( aliases );
};
