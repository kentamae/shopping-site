var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("default", function() {
    gulp.watch("css/style.scss", function(){
        gulp.src("css/style.scss")
            .pipe(sass())
            .pipe(gulp.dest("css"));
    })
});
