module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  var task = {
    'aakashTask': {
      description: 'demo task',
      multiTask: function () {
        var data = this.data;

        var opts = this.options({
          someValue: 'here is the default'
        });

        console.log('aakashTask', data, opts);
      }
    }
  };

  gruntTaksUtils.registerTasks( task );
};