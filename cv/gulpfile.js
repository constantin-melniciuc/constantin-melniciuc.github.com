// The input SCSS files and the SCSS output path
var scssInput = [
	'app/scss/style.scss',
	'app/scss/print.scss'
	];
var scssOutput = 'app/css';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


// Watch SASS.
gulp.task('sass', function() {
  return gulp
    .src(scssInput)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())

    .pipe(gulp.dest(scssOutput))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Spin up server and reload.
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
