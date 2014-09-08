var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  return gulp.src('./src')
    .pipe(less());
    .pipe(gulp.dest('./dist'));
});
