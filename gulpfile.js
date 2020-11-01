const gulp = require('gulp'),
    gulpImagemin = require('gulp-imagemin');

gulp.task('image', async function () {
    gulp.src('image/original/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('image'));
});