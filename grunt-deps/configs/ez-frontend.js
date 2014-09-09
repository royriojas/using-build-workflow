module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    'js-demo' : {
      src: [ 'src/js/greet.js', 'src/js/index.js'],
      dest: 'dist/out.js'
    },
    'css-demo' : {
      src: [
        'src/less/demo.less',
        'src/less/second.less'
      ],
      dest: 'dist/out.css',
      options: {
        customImports : [
          'src/less/import.less'
        ]
      }
    }
  };
};