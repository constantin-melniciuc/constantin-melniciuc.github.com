// The input SCSS files and the SCSS output path
var scssInput = 'app/scss/**/*.scss';
var scssOutput = 'app/css';

// Start everything up.
const { src, dest, watch } = require('gulp');

const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');



function css() {
  return src(scssInput)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(scssOutput))
    .pipe(browserSync.reload({
      stream: true
    }))
}

// Spin up server and reload.
function bsync() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
}

function js() {
  return src('app/js/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', { sourcemaps: true }))
    .pipe(browserSync.reload({
      stream: true
    }))
}


exports.bsync = bsync;
exports.js = js;
exports.css = css;
exports.default = function () {
  bsync();
  watch(scssInput, css);
  watch('app/js/**/*.js', js);
}
