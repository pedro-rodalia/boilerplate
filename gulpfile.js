var gulp = require('gulp');
var webpack = require('webpack');
var gulpwebpack = require('webpack-stream');
var nodemon = require('gulp-nodemon');

gulp.task('start', (done) => {
  console.log('Starting server and watching with nodemon');
  nodemon({
     script: './bin/www',
     ext: 'js html',
     env: { 'NODE_ENV': 'development' }
 });
  done();
});

gulp.task('build', (done) => {
  console.log('Bundling with webpack and watching files');
  gulp.src('src/index.js')
    .pipe(gulpwebpack( require('./webpack.config.js') ), webpack)
    .pipe(gulp.dest('public/dist'));
  done();
});

gulp.task('default', gulp.series(['build', 'start'], (done) => {
  console.log('Starting server');
  done();
}));
