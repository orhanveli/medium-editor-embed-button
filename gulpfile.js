/**
 * Created by orhanveli on 26/08/16.
 */

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    useref = require("gulp-useref"),
    uglify = require("gulp-uglify"),
    cssnano = require("gulp-cssnano"),
    gulpIf = require("gulp-if"),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    runSequence = require("run-sequence"),
    webserver = require("gulp-webserver");


function minJsTask(){
    return gulp.src(["dist/js/*.js", "!dist/js/*.min.js"])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/js"));
}

function sassTask(){
    return gulp.src("src/scss/medium-editor-embed-button.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
}

function minCssTask(){
    return gulp.src(["dist/**/[^_]*.css", "!dist/**/*.min.css"])
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist"));
}


function userefTask(){
    return gulp.src("src/sample/*.html")
        .pipe(useref())
        //.pipe(gulpIf("*.js", uglify()))
        //.pipe(gulpIf("*.css", cssnano()))
        .pipe(gulp.dest("dist/sample"));
}

function watchTask(){
    gulp.watch(["src/scss/**/*.scss", "src/js/**/*.js", "src/sample/**/*"], ["dist"]);
}

function webserverTask(){
    gulp.src("src")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            port: 8088,
            open: "http://localhost:8088/sample/index.html"
        }));
}

gulp.task("min:js", minJsTask);
gulp.task("min:css", ["sass"], minCssTask);
gulp.task("min", ["min:css", "min:js"]);
gulp.task("sass", sassTask);
gulp.task("useref", ["sass"], userefTask);
gulp.task("watch", watchTask);
gulp.task("serve", webserverTask);

gulp.task("dist", function(){
    runSequence("useref", "min");
});
