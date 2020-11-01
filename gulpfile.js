const gulp = require('gulp')
//     gulpImagemin = require('gulp-imagemin');

// gulp.task('image', async function () {
//     gulp.src('image/original/**')
//         .pipe(gulpImagemin())
//         .pipe(gulp.dest('image'));
// });

const purify = require('gulp-purifycss');

gulp.task('css', function() {
  return gulp.src('./js/slick/*.css')
    .pipe(purify(['./js/*.js', './*.html']))
    .pipe(gulp.dest('./dist/'));
});