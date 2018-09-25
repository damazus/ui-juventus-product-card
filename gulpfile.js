let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./dist/js/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function(){
    return gulp.src(".//scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);