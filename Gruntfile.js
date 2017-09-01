module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({

		jshint: {
			all: ['js/*.js']
		},
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['jshint'],
				options: {
					spawn: false,
				}
			}
		}
 	});


		// Load the plugins tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	
		// Default task(s).

	grunt.registerTask('default', ['jshint', 'watch'])
	
};