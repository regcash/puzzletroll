var shell = require('shelljs');
module.exports = function(grunt) {

  grunt.initConfig({

    jshint : {
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

    watch : {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    concat : {
      deploy : {
        options: {
          stripBanners: {block: true},
          process: true,
          separator: '\n /* ----- */ \n'
        },
        src: [
          'client/lib/angular/angular.js', 
          'client/lib/angular-ui-router/release/angular-ui-router.js',
          'client/utils.js',
          'client/home/**/*.js',
          'client/app.js'
          ],
        dest: 'client/dist/puzzleTroll.min.js'
      }
    },

    uglify : {
      deploy : {
        src : ['client/dist/puzzleTroll.min.js'],
        dest : 'client/dist/puzzleTroll.min.js'
      }
    },

    cssmin : {
      target : {
       files : [{
        expand : true,
        cwd : 'client',
        src : ['*.css'],
        dest : 'client/dist',
        ext: '.min.css'
       }]
      }
    }
     
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('pull', function() {
  	var c = shell.exec('git pull upstream master').code;
    if(c !== 0) {
    	shell.exec('npm install');
    	shell.exec('bower install');
    }
	});

  grunt.registerTask('drop', function () {
    shell.exec('echo dropping database... && mysql -u root < db/.dropDB.sql');
    shell.exec('echo adding schema... && mysql -u root < db/schema.sql');
    shell.exec('echo adding fake data... && mysql -u root < db/fakeData.sql');
  });

  grunt.registerTask('preDeploy', ['jshint', 'concat:deploy','uglify:deploy']);

};