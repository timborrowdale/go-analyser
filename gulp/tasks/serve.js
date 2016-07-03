var gulp      = require('gulp'),
	connect   = require('gulp-connect');

gulp.task('serve', function(done) {
	connect.server({
  	root: 'web',
  	port: 8081
	});
	done();
});
