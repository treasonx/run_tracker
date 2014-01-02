module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({

    connect: {
      test: {
        options: {
          port: 8080,
          open: {
            //assumes OS X
            appName: 'open',
            target: 'http://localhost:8080/node_modules/intern/client.html?config=test/intern_config.js',
            callback: function() {
              grunt.log.write('visit http://localhost:8080/node_modules/intern/client.html?config=test/intern_config.js');
            }
          },
          keepalive: true,
          livereload: true,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
