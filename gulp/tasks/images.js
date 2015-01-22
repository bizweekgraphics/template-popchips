var gulp = require('gulp');
var size = require('gulp-size');

module.exports = function() {
  gulp.task('images', function() {
    gulp.src(['./src/img/**/*.jpg', './src/img/**/*.png'])
      .pipe(gulp.dest('./public/build/img/'))
      .pipe(size())
  })
}