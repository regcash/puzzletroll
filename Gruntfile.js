var shell = require('shelljs');
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [
      'Gruntfile.js', 
      'server/**/*.js',
      'server/*.js',
      'test/*.js',
      'db/*.js',
      'db/models/*.js'
      ],
      options: {
        globals: {
          jQuery: true,
          angular: true,
          underscore: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('pull', function() {
  	var c = shell.exec('git pull upstream master').code;
    if(c !== 0) {
    	shell.exec('npm install');
    	shell.exec('bower install');
    }
	});

};