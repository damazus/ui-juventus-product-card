const { src, dest, series, watch } = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function sass(){
   return src("scss/*.scss", { sourcemaps: true })
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(dest("dist/css", { sourcemaps: '.' }))
      .pipe(browserSync.stream());
}

function serve(){
   browserSync.init({
      server: {
         baseDir: "./"
      }
   });

   watch("scss/**/*.scss", series(sass));
   watch("*.html").on('change', browserSync.reload);
   watch("dist/js/**/*.js").on('change', browserSync.reload);
}

module.exports = {
   default: serve
}