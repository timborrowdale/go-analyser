var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(done) {
    runSequence( 
        'angular-scripts', 
        'app-scripts',
        'html');
    done();
});