var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir');

requireDir('gulp/tasks', { recurse: true });

gulp.task('default', function(done) {
    runSequence( 'build', 'serve', 'stubby', 'watch');
    done();
});