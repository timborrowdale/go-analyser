var gulp = require("gulp");

gulp.task("html", function() {

  gulp.src('src/js/templates/**')
    .pipe(gulp.dest('web/templates'));

  return gulp.src([
    'src/*.html'
  ])
    .pipe(gulp.dest('web'));
});
