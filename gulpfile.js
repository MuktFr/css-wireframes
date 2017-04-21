// Include dependancies
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var cssBase64 = require('gulp-css-base64');

// Default task
gulp.task('default', function() {
});

// Main task : monitor changes on SASS files and fire some stuff :
// - 1. Compile SASS to CSS
// - 2. Add autoprefixes to CSS
// - 3. Minify the CSS
gulp.task('watch', function() {
    gulp.watch('./src/**', ['sass', 'autoprefixer', 'base64', 'minify']);
});

// Task : compile the main SASS file to CSS
gulp.task('sass', function() {
    return gulp.src('./src/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

// Task : add vendor prefixes to the compiled CSS file
gulp.task('autoprefixer', function() {
    return gulp.src('./dist/*.css')
        .pipe(postcss(
            [autoprefixer()]
        ))
        .pipe(gulp.dest('./dist'));
});

// Task : minify the compiled CSS file in a new .min.css file
gulp.task('minify', function() {
    return gulp.src('./dist/wireframes.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./dist'));
});

// Task : converts all data found within a stylesheet into base64-encoded data URI strings
gulp.task('base64', function () {
    return gulp.src('./dist/*.css')
        .pipe(cssBase64({
            //baseDir: "./src/images" // doesn't seem to work ?
        }))
        .pipe(gulp.dest('./dist'));
});

// Go go go !
gulp.task('default', ['watch']);
