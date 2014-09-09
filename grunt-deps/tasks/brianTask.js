module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  var task = {
    'brianTask': function ( data ) {
      var options = this.options( {
        someValue: 'default'
      } );
      console.log( 'brianTask', data, options );
    }
  };

  gruntTaksUtils.registerTasks( task );
};
