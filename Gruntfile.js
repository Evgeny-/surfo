#!/usr/bin/node

module.exports = function(grunt) {

   var vendors = [
      'js/vendors/angular.js',
      'js/vendors/angular-hammer.js',
      'js/vendors/angular-resource.js',
      'js/vendors/angular-animate.js',
      'js/vendors/angular-route.js',
      'js/vendors/bindonce.js',
      'js/vendors/hammer.min.js'
   ];

   var app = [
      'js/app/app.coffee',
      'js/app/config.coffee',
      'js/app/routers.coffee',
      'js/app/controllers/**.coffee',
      'js/app/directives/**.coffee',
      'js/app/factories/**.coffee',
      'js/app/filters/**.coffee',
      'js/app/runs/**.coffee',
      'js/app/services/**.coffee'
   ];

   grunt.initConfig({
      //pkg: grunt.file.readJSON('package.json'),
      concat: {
         vendors: {
            src: vendors,
            dest: 'build/vendors.js'
         },
         all: {
            src: ['build/vendors.js', 'build/app.js', 'build/templates.js'],
            dest: 'build/build.js'
         }
      },

      coffee: {
         app: {
            options: {
               join: true
            },
            files: {
               'build/app.js': app
            }
         }
      },

      uglify: {
         options: {
            beautify: true
         },
         dist: {
            files: {
               'build/build.js': ['build/build.js']
            }
         }
      },
      ngtemplates: {
         options: {
            module: 'App'
         },
         app: {
            src: 'views/**.html',
            dest: 'build/templates.js'
         }
      },
      less: {
         styles: {
            files: {
               'build/build.css': ['css/**.less']
            }
         }
      },
      watch: {
         app: {
            files: ['build/app.js'],
            tasks: ['concat:all']
         },
         coffee: {
            files: app,
            tasks: ['coffee']
         },
         tpl: {
            files: ['build/templates.js'],
            tasks: ['concat:all']
         },
         html: {
            files: ['views/**.html'],
            tasks: ['ngtemplates']
         },
         less: {
            files: ['css/**.less'],
            tasks: ['less:styles']
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-coffee');
   grunt.loadNpmTasks('grunt-angular-templates');
   grunt.loadNpmTasks('assemble-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-concat');

   grunt.registerTask('default', ['concat:vendors', 'coffee', 'ngtemplates', 'concat:all', 'less:styles', 'watch']);
   grunt.registerTask('build', ['concat:vendors', 'coffee', 'ngtemplates', 'concat:all', 'less:styles', 'uglify']);

};