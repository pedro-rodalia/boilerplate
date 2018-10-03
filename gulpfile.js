var gulp = require('gulp'); 

gulp.task('build', (done) => {
  console.log('working');
  done();
});

gulp.task('start', (done) => {
  console.log('start');
  done();
});

gulp.task('default', gulp.series('build', 'start', (done) => {
  console.log('done');
  done();
}))
