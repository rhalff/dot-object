module.exports = function(grunt) {

  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      watch: {
        files: ['index.js']
      }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('default', ['watch']);

};
