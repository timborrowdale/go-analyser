var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('app-scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('app-scripts.js'))
    .pipe(gulp.dest('web/js'))
});