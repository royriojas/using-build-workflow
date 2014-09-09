module.exports = function ( grunt ) {

  var prepushFiles = [
    'Gruntfile.js',
    'grunt-deps/**/*.js',
    'src/**/*.js'
  ];

  return {
    'docco_husky': {
      'sources': [
        'Gruntfile.js',
        'grunt-deps/',
        'src/'
      ]
    },

    //    "yuidoc": {
    //      "config": "./grunt-deps/yuidoc/yuidoc.json"
    //    },

    'filesToValidate': {
      'jsbeautifier': prepushFiles,
      'jscs': prepushFiles,
      'jshint': prepushFiles,
      'jsvalidate': prepushFiles,
      'codepainter': prepushFiles
    }
  };
};
