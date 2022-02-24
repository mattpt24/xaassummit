// GULP 
const gulp = require('gulp');
const {src , dest, watch, series} = require('gulp');

// SASS COMPILER
const sass = require('gulp-sass')(require('sass'));

// CSS MINIFER
const cleanCSS = require('gulp-clean-css'); 

// AUTOPREFIXER
const autoprefixer = require('gulp-autoprefixer');




// SASS COMPILER // CSS MINIFIER // AUTO PREFIXER
function buildStyles() {
  return gulp.src('build/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('./dist'));
};




// LIVE WATCH
function watchCSS() {
    watch('build/**/*.scss', buildStyles);
}




exports.buildStyles = series(buildStyles);
exports.watchCSS = series(watchCSS);
exports.default = series(buildStyles, watchCSS);