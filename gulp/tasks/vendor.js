var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var libs = require('../utils/libs.js');
var deamdify = require('deamdify');
var debowerify = require('debowerify');
var uglify = require('gulp-uglify');
var gStreamify = require('gulp-streamify');
var size = require('gulp-size');

module.exports = function() {

  gulp.task('vendor', function() {
    var opts = {
      debug: true
    }

    var bundle = browserify(opts)
      .transform({global: true}, deamdify)
      .transform({global: true}, debowerify)
      .transform('browserify-shim');


    libs.forEach(function(lib) {
      bundle.require(lib)
    })

    return bundle
      .bundle()
      .pipe(source('vendor.js'))
      .pipe((gStreamify(uglify())))
      .pipe(gulp.dest('./public/build/scripts'))
      .pipe((gStreamify(size())))
  })

}
