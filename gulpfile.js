// Include dependancies
var
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    minify = require('gulp-minify'),
    rename = require("gulp-rename"),
    cssBase64 = require('gulp-css-base64'),
    clean = require('gulp-clean')
;

// Default task
gulp.task('default', function() {});

// Monitor changes on files and launch various tasks
gulp.task('watch', function() {
    // CSS stuff
    gulp.watch('./src/**/*.scss', gulp.series('sass', 'autoprefixer', 'base64', 'minify-css', 'sourcemaps'));
    // Javascript stuff
    gulp.watch('./src/javascript/*.js', gulp.series('minify-js'));
    // Fontello
    gulp.watch('./src/config.json', gulp.series('fontello-import', 'fontello-deploy'));
});

// Chain of tasks to build the CSS
// FIXME : doesn't work !
gulp.task('build-css', function(done) {
    gulp.series('sass', 'autoprefixer', 'base64', 'minify-css', 'sourcemaps');
    done();
});

// Chain of tasks to build the Javascript (well, only one task at the moment)
// FIXME : doesn't work !
gulp.task('build-js', function(done) {
    gulp.series('minify-js');
    done();
});

// Compile the main SASS file to CSS
gulp.task('sass', function() {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

// Add vendor prefixes to the compiled CSS file
gulp.task('autoprefixer', function() {
    return gulp.src('./dist/css/*.css')
        .pipe(postcss(
            [autoprefixer()]
        ))
        .pipe(gulp.dest('./dist/css'));
});

// Converts all data found within a stylesheet into base64-encoded data URI strings
gulp.task('base64', function() {
    return gulp.src('./dist/css/wireframes.css')
        .pipe(cssBase64({
            maxWeightResource: 131072,
            //baseDir: "./src" // doesn't seem to work ?
        }))
        .pipe(gulp.dest('./dist/css'));
});

// Minify the compiled CSS file in a new .min.css file
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

// Minify the JS file in a new .min.js file
gulp.task('minify-js', function() {
    return gulp.src('./src/javascript/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('./dist/javascript'));
});

// Create sourcemaps for the compiled CSS
gulp.task('sourcemaps', function() {
    return gulp.src('./dist/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
});

// Import fontello SVG and CSS files in a temp directory from the config.json
gulp.task('fontello-import', function () {
    return gulp.src('./src/config.json')
        .pipe(plugins.fontello({
            font: 'font', // Destination dir for Fonts and Glyphs
            css:  'css'    // Destination dir for CSS Styles
        }))
        //.pipe(plugins.print())
        .pipe(gulp.dest('./src/fontello_tmp'));
});

// Move selected fontello files from the temp directory to the working directory
// FIXME : In the CSS the path is wrong, and we don't need svg, ttf and eot versions.
gulp.task('fontello-deploy', function (done) {
    gulp.src("./src/fontello_tmp/font/fontello.woff")
        //.pipe(rename("fontello.woff"))
        .pipe(gulp.dest('./src/fonts'));
    gulp.src("./src/fontello_tmp/font/fontello.woff2")
        //.pipe(rename("fontello.woff2"))
        .pipe(gulp.dest('./src/fonts'));
    gulp.src("./src/fontello_tmp/css/fontello.css")
        .pipe(rename("_fontello.scss"))
        .pipe(gulp.dest('./src'));
    gulp.src('./src/fontello_tmp', {read: false})
        .pipe(clean());
    done();
});

// Go go go !
gulp.task('default', gulp.series('watch'));
