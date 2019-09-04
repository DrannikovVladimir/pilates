'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var svgo = require('gulp-svgo');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(sass())
    .pipe(postcss([
      require('autoprefixer')
    ]))
    .pipe(gulp.dest('source/css/'))
    .pipe(browserSync.stream());
});

gulp.task('server', function () {
  browserSync.init({
    server: 'source'
  });

  gulp.watch('source/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('source/*.html').on('change', browserSync.reload);
  gulp.watch('source/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('svg', function () {
  return gulp.src('source/img/**/*.svg')
    .pipe(svgo())
    .pipe(gulp.dest('source/img'))
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLeve: 5}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('source/img'));
});

gulp.task('start', gulp.series('sass', 'server'));
