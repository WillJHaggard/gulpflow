# Workflow with Git, Gulp, and Browserify

##Dependency Notes

###gulpjs/gulp-util
####src: https://github.com/gulpjs/gulp-util

This is a utility package for gulp plugins by 
Fractal <contact@wearefractal.com> (http://wearefractal.com/)

I am using the .log method to log in case of errors in this workflow.

###gulpjs/gulp-coffee
####src: https://github.com/wearefractal/gulp-coffee

This is a coffeescript compiling plugin by 
Fractal <contact@wearefractal.com> (http://wearefractal.com/)

I have set up a gulp.task to compile from an array of source files
if needed.

###gulpjs/gulp-concat
####src: https://github.com/wearefractal/gulp-concat

This is a js concat plugin for gulp by 
Fractal <contact@wearefractal.com> (http://wearefractal.com/)

I have set up a gulp.task to compile from an array of js authored source files
that need to be put together into one script.js file.