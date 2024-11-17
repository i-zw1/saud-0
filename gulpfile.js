var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var notify = require("gulp-notify");
var pug = require("gulp-pug");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));

gulp.task("scss", () => {
  return gulp
    .src("project/css/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("SCSS Task is Done!"));
});

gulp.task("js", () => {
  return gulp
    .src("project/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("JS Task is Done!"));
});

gulp.task("pug", () => {
  return gulp
    .src("project/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(notify("PUG Task is Done!"));
});

gulp.task("watch", (done) => {
  gulp.watch("project/css/**/*.scss", gulp.series("scss"));
  gulp.watch("project/js/*.js", gulp.series("js"));
  gulp.watch("project/**/*.pug", gulp.series("pug"));
  done();
});

gulp.task("default", gulp.series("watch"));
