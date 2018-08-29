let gulp = require('gulp');
let sass = require('gulp-sass');
let pump = require('pump');
let browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch("src/assets/scss/**/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/dist/js/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function(){
    return gulp.src("src/assets/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);