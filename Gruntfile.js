module.exports = function(grunt) {

  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      shell: {
        typescript: {
          command: 'tsc -m commonjs --removeComments index.ts'
        }
      },

      watch: {
        files: ['index.ts'],
        tasks: ['shell:typescript']
      }

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('default', ['watch']);

};
