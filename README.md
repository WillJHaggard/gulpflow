# Workflow with Git, Gulp, and Browserify

##Dependency Setup Notes/Thought Process

###gulpjs/gulp-util
####src: https://github.com/gulpjs/gulp-util

This is a utility package for gulp plugins by 
Fractal <contact@wearefractal.com> (http://wearefractal.com/)
	
	var gutil = require('gulp-util')


I am using the .log method to log in case of errors in this workflow.

###gulpjs/gulp-coffee
####src: https://github.com/wearefractal/gulp-coffee

This is a coffeescript compiling plugin by 
Fractal <contact@wearefractal.com> (http://wearefractal.com/)

	var coffee = require('gulp-coffee')

A gulp.task to compile from an array of source files
if needed.

###gulpjs/gulp-concat
####src: https://github.com/wearefractal/gulp-concat

This is a js concat plugin for gulp by 
Fractal <contact@wearefractal.com> (http://wearefractal.com/)

	
	var concat = require('gulp-concat')
	

A gulp.task to compile from an array of js authored source files
that need to be put together into one script.js file.

###gulpjs/gulp-browserify
####src: https://www.npmjs.com/package/gulp-browserify

	var browserify = require('gulp-browserify')

This is the browserify gulp package from npm.
	
	npm install --save-dev gulp-browserify
	npm install --save-dev mustache
	npm install --save-dev jquery

This requires a couple changes to incorporate mustache and jquery libraries.

	.pipe(browserify())

Addition to the gulpfile.js within the js concat task run code block.
With this added to the gulpfile.js, the coffeescript file requiring jquery, and the template.js
file requiring mustache--browserify will now add these libraries dynamically.

###gulpjs/gulp-compass
####src: http://sass-lang.com/documentation/file.SASS_REFERENCE.html 
####&
####src: https://www.npmjs.com/package/gulp-compass

	var compass = require('gulp-compass')

npm install:

	npm install --save-dev gulp-compass

A gulp.task for compass and I am using a compass object instead of a 
Ruby config file. The style.scss has imports for all other sister scss files so the sassSources
file is compiled via the language syntax. So, the sassSources is used in the gulp.task to pipe into
the compass object. 

Options in {}

	sass: 'components/sass',
	images: 'builds/development/images',
	style: 'expanded'

The style option to expanded is so it is readable. All output style values include -
nested | expanded | compact | compressed

###gulp default task
####src: https://github.com/gulpjs/gulp

A gulp.task that is set to 'default' so it can be called just by running:

	gulp

in the terminal

It runs the listed array (second param) in that order all at once.

###gulp watch
####src: https://github.com/gulpjs/gulp

A gulp.task that does a gulp.watch for the plugins changes. The thing to note here is that even though in the compass plugin you can src the style.scss because of imports you cannot do that here. So, I added the src to 'components/sass/*.scss' to grab all the difference scss file components so that it can accurately watch and change all the and any edits. This can be stopped in the terminal by pressing control+c.

###gulp connect
####src: https://www.npmjs.com/package/gulp-connect

A gulp.task using connect.server for livereload. Installed from terminal like above npm packages.

	npm install --save-dev gulp-connect

and

	.pipe(connect.reload())

was placed at the bottom of the anon functions for the compass and js tasks. The coffee task doesn't need this pipe method because it is used through the js gulp.task.
