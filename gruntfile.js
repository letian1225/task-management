module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
		options: {
			browserifyOptions: {
			debug: true
			}
		},
		main: {
			src: 'js/main.js',
			dest: 'js/findem.js'
		}
    },
    watch: {
      files: 'js/*',
      tasks: ['default']
    }
  });
}