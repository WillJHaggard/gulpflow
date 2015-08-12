var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];


gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({
                bare: true
            })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))

});
/* 
The above basically creates a gulp task (via gulp documentation)
that takes the coffee variable created earlier and creates a process via the second
param function--the function takes the source of the .coffee file and .pipe's it with an option
from the coffeescript api documentation that is called bare -- this means that it will compile
the js without a wrapper function. Then this pipe method is followed by an .on that will display
and error if there is invalid coffeescript and then logs whatever the error is in the console with the
gutil variable log method. THEN, the second .pipe process puts the compiled JS from the first .pipe
method into a source--in this case 'components/scripts' with the gulp.dest

Very simple and makes sense
to run this task onl in the terminal it is: gulp coffee
*/

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('builds/development/js'))
});

/* 
The above creates a gulp task that takes the src of jsSources (the previously declared
array of what js files have been authored) and concats them together into one
file and puts the script.js concat file into the destination of builds/development/js
folder. To run this task only in the terminal it is: gulp js
*/