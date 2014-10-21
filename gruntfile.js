module.exports = function(grunt) {
	var common_src = 'src',
	taskConfig = {
		jshint : {
			files: [common_src + '/**/*.js'],
			options : {
				laxbreak: true,
				expr: true,
				boss : true
			}
		},
		ngAnnotate : {
		    options: {
		    	added: true,
		    	remove: true
		    },
		    default : {
		    	files: [{
		    		src: [common_src + '/**/*.js'],
		    	}]
		    }
		},
		uglify : {
			my_target: {
			    files: {
			        'public/js/app.min.js': [common_src + '/**/*.js']
			    }
		    },
			options : {
				report: 'min',
			    mangle: true
			},
		},
		concat: {
			sass_all : {
			    src: ['src/**/*.scss', '!src/**/*.min.scss'],
			    dest: 'grunted/sass/all.sass.min.scss'
			}
		},
		sass: {
			default: {
				src: ['grunted/sass/all.sass.min.scss'],
				dest: 'grunted/sass/sass.css',
			}
  		},
  		cssmin : {
  			default: {
  				src: ['grunted/sass/sass.css'],
  				dest: 'public/css/app.min.css',
  			}
  		},
		html2js : {
			default: {
				src: [common_src + '/**/*.tpl.html'],
				dest: 'public/js/app.templates.js'
			}
		},
		copy : {
			main: {
				files: [
					{expand: true, src: ['vendor/**'], dest:  + 'public/'},
					{expand: true, cwd: 'src/images', src: ['**'], dest: 'public/images', filter: 'isFile'},
				]
			}
		},
		connect: {
			server: {
				options: {
					hostname: "127.0.0.1",
					livereload: true,
					keepalive: true,
					port: 1010
				}
			}
		},
		watch :{
			all: {
				options: { livereload: true },
				files: [common_src + '/**/*']
			},
			js: {
				files: [common_src + '/**/*.js'],
				tasks: ['jshint', 'ngAnnotate', 'uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: [common_src + '/**/*.css'],
				tasks: ['cssmin'],
				options: {
					spawn: false
				}
			},
			html: {
				files: [common_src + '/**/*.tpl.html'],
				tasks: ['html2js'],
				options: {
					spawn: false
				}
			},
			sass: {
				files: [common_src + '/**/*.scss',common_src + '/**/*.sass'],
				tasks: ['concat', 'sass', 'cssmin'],
				options: {
					spawn:false
				}
			},
		}

	};
	grunt.initConfig(grunt.util._.extend( taskConfig ));
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['jshint', 'ngAnnotate', 'uglify', 'concat', 'sass', 'cssmin', 'html2js', 'copy', 'watch']);
};