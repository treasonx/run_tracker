module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({

    connect: {
      app: {
        options: {
          port: 8080,
          keepalive: true,
          base: 'web_client/'
        }
      },
      test: {
        options: {
          port: 8080,
          open: {
            //assumes OS X
            appName: 'open',
            target: 'http://localhost:8080/node_modules/intern/client.html?config=test/intern/intern_config.js',
            callback: function() {
              grunt.log.write('visit http://localhost:8080/node_modules/intern/client.html?config=test/intern/intern_config.js');
            }
          },
          keepalive: true
        }
      }
    },


    intern: {
      app: {
        options: {
          runType: 'runner',
          config: 'test/intern_config',
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('intern');
  grunt.loadNpmTasks('grunt-karma');

};
