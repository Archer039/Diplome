var gulp = require("gulp");
var babel = require("gulp-babel");
var autoprefixer = require("gulp-autoprefixer");
var cleanCss = require("gulp-clean-css");
var connect = require("gulp-connect");
var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

gulp.task("connect", function() {
    connect.server({
        root: "public/",
        livereload: true
    });
});


gulp.task("js", function() {
    return gulp.src("app/js/*.js")
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(gulp.dest("public/js/"))
        .pipe(connect.reload());
});

gulp.task("css", function() {
    return gulp.src("app/scss/style.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("public/css"))
        .pipe(connect.reload());
});

gulp.task("minImage", function() {
    return gulp.src("app/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("public/img/"))
        .pipe(connect.reload());
});

gulp.task("htmlReload",async function(){
    gulp.src("public/index.html")
        .pipe(connect.reload())
})

gulp.task("watchFiles", function() {
    gulp.watch("app/img/**/*", gulp.series("minImage"));
    gulp.watch("app/js/*", gulp.series("js"));
    gulp.watch("app/scss/*", gulp.series("css"));
    gulp.watch("public/index.html", gulp.series("htmlReload"));
});

gulp.task("default", gulp.parallel("connect", "watchFiles"))

