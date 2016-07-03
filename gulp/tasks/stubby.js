var gulp = require('gulp');
var stubby = require('gulp-stubby-server');

gulp.task('stubby', function(cb) {
    var options = {
        files: [
            'mocks/fixtures/*.json'
        ]
    };
    stubby(options, cb);
});