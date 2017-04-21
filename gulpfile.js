// Include dependancies
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var rename = require("gulp-rename");
var cssBase64 = require('gulp-css-base64');

// Default task
gulp.task('default', function() {});

// Task : monitor changes on files and launch various tasks
gulp.task('watch', function() {
    // CSS stuff
    gulp.watch('./src/**/*.scss', gulp.series('sass', 'autoprefixer', 'base64', 'minify-css', 'sourcemaps'));
    // Javascript stuff
    gulp.watch('./src/javascript/*.js', gulp.series('minify-js'));
});

// Task : compile the main SASS file to CSS
gulp.task('sass', function() {
    return gulp.src('./src/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
});

// Task : add vendor prefixes to the compiled CSS file
gulp.task('autoprefixer', function() {
    return gulp.src('./dist/css/*.css')
        .pipe(postcss(
            [autoprefixer()]
        ))
        .pipe(gulp.dest('./dist/css'));
});

// Task : converts all data found within a stylesheet into base64-encoded data URI strings
gulp.task('base64', function() {
    return gulp.src('./dist/css/*.css')
        .pipe(cssBase64({
            //baseDir: "./src/images" // doesn't seem to work ?
        }))
        .pipe(gulp.dest('./dist/css'));
});

// Task : minify the compiled CSS file in a new .min.css file
gulp.task('minify-css', function() {
    return gulp.src('./dist/css/wireframes.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./dist/css'));
});

// Task : minify the JS file in a new .min.js file
gulp.task('minify-js', function() {
    return gulp.src('./src/javascript/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('./dist/javascript'));
});

// Task : create sourcemaps for the compiled CSS
gulp.task('sourcemaps', function() {
    return gulp.src('./dist/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
				.pipe(gulp.dest('./dist/css'));
});

// Go go go !
gulp.task('default', gulp.series('watch'));