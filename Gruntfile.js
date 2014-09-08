module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: require('./package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: {
        src: ['src/**/*.js', 'Gruntfile.js']
      }
    }, 
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/out.js'
      }
    }, 
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    brianTask: {
      options: {
        someValue: 'Another value'  
      }
    },
    aakashTask: {
      options: {
        someValue: 'Another value'  
      },
      task1: {
        options: {
          someValue: 'Another value from local'  
        },
        src: ['src/**/*.js'],
        dest: 'dist/'
      },
      task2: {
        options: {
          anotherVariable: 'some different value here'
        },
        src: ['src/**/*.js'],
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint'); 
  grunt.loadNpmTasks('grunt-contrib-uglify'); 

  grunt.registerTask('brianTask', function (data) {
    var options = this.options({
      someValue: 'default'
    });
    console.log('brianTask',data, options);
  });

  grunt.registerMultiTask('aakashTask', 'demo task', function () {

    var data = this.data;

    var opts = this.options({
      someValue: 'here is the default'
    });

    console.log('aakashTask', data, opts);

  });

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'brianTask:hello', 'aakashTask']);
};




