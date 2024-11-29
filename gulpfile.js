// import plugins
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import notify from "gulp-notify";
import pug from "gulp-pug";
import sourcemaps from "gulp-sourcemaps";
import zip from "gulp-zip";
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// task to compile scss files
gulp.task("scss", () => {
  return gulp
    .src("project/css/main.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("SCSS Task is Done!"));
});

// task to concat all js files in main.js file
gulp.task("js", () => {
  return gulp
    .src("project/js/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("JS Task is Done!"));
});

// task to compile pug files
gulp.task("pug", () => {
  return gulp
    .src("project/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(notify("PUG Task is Done!"));
});

// task to watch files and run tasks auto
gulp.task("watch", (done) => {
  gulp.watch("project/css/**/*.scss", gulp.series("scss"));
  gulp.watch("project/js/*.js", gulp.series("js"));
  gulp.watch("project/**/*.pug", gulp.series("pug"));
  done();
});

// task to compress files
gulp.task("compress", () => gulp.src("dist/**/*.*").pipe(zip("website.zip")).pipe(gulp.dest(".")));

// default task
gulp.task("default", gulp.series("watch"));