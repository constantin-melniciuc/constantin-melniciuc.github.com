'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  notify = require('gulp-notify'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css');



var plumberError = function (err) {
    gutil.beep();
    notify({message: err})
};

gulp.task('sass', function(){
  return gulp.src('scss/main.scss')
    .pipe(plumber(function (error) {
      plumberError(error);
      this.emit('end');
    }))
    .pipe(sass())
      .pipe(autoprefixer(
            'last 2 version',
            '> 1%',
            'ie 8',
            'ie 9',
            'ios 6',
            'android 4'
        ))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({message: 'SCSS Compiled!'}));
});




gulp.task('browser-sync', function() {
    browserSync({
        server: './'
        // proxy: 'localhost/love',
        // ghostMode: false,
        // tunnel: true,
        // online: false,
        // logConnections: true
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload;
});


gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch('scss/**/*.scss', ['sass', 'bs-reload']);
    gulp.watch('./**/*.php', ['bs-reload']);
    gulp.watch('./**/*.twig', ['bs-reload']);
});
