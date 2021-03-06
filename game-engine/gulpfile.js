/*jslint node: true */

var gulp   = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

var watching = false;

function onError(err) {
  console.log(err.toString());
  if (watching) {
    this.emit('end');
  } else {
    process.exit(1);
  }
}


gulp.task('lint', function() {
  return gulp
    .src(['gulpfile.js', 'src/*.js', 'test/*.js', 'etc/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function(cb) {
  gulp.src(['src/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(['test/*_test.js'])
        .pipe(mocha().on('error', onError))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});

gulp.task('watch', function() {
  gulp.watch(['src/*.js', 'test/*.js'], function() {
    watching = true;
    gulp.run('lint', 'test');
  });
  gulp.watch(['etc/*.js'], function() {
    watching = true;
    gulp.run('lint');
  });
});

gulp.task('default', ['lint', 'test', 'watch']);
