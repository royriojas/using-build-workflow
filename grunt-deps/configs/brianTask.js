module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    options: {
      someValue: 'Another value' + pkg.version
    }
  };
};
