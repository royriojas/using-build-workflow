# Steps on a default grunt-file

1. npm i -D grunt-*
2. add grunt.loadNpmTasks(grunt-*)
3. add a section to the config file
4. add the task to the queue of tasks (registerTask)

## Customs tasks

### Single Target Task

1. grunt.registerTask and pass a function
2. add the task to the queue of tasks (registerTask)

### MultiTarget Task

1. grunt.registerTask and pass a function
2. Also provide a configuration section in the grunt.config object.
3. add the task to the queue of tasks (registerTask)



