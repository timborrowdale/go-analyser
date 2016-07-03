var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('angular-scripts', function() {
  return gulp.src('node_modules/angular/angular.js')
    .pipe(concat('angular-scripts.js'))
    .pipe(gulp.dest('web/js'));
});