module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({

    connect: {
      test: {
        options: {
          port: 8080,
          //assumes OS X
          appName: 'open',
          open: 'http://localhost:8080/node_modules/intern/client.html?config=test/intern_config.js',
          keepalive: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
