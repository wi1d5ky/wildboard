module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	var isDev = process.argv[2] !== 'build';
	grunt.initConfig({
		env: {
			development: {
				NODE_ENV: 'development'
			},
			production: {
				NODE_ENV: 'production'
			}
		},
		browserSync: {
			server: {
				bsFiles: {
					src: [
						'index.html',
						'script.js'
					]
				},
				options: {
          watchTask: true,
					server: './'
				}
			}
		},
		browserify: {
			options: {
				browserifyOptions: {
					debug: isDev
				},
				keepAlive: isDev,
				watch: isDev,
				transform: [require("babelify").configure({
					presets: ["es2015", "react"],
					plugins: isDev ? [] : ["transform-react-constant-elements", "transform-react-inline-elements"]
				}), require("envify")]
			},
			app: {
				src: 'script.jsx',
				dest: 'script.js'
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					src: ['./*.html'],
					dest: 'public/'
				}]
			},
			style: {
				src: 'styles/style.css',
				dest: 'public/',
			},
			images: {
				expand: true,
				cwd: 'images/',
				src: '**',
				dest: 'public/images/'
			},
			CNAME: {
				expand: true,
				src: 'CNAME',
				dest: 'public/'
			}
		},
		uglify: {
			app: {
				files: {
					'public/script.js': ['./script.js']
				}
			}
		}
	});
	grunt.registerTask('default', ['env:development', 'browserSync', 'browserify']);
	grunt.registerTask('build', ['env:production', 'browserify', 'copy', 'uglify']);
}
