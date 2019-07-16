const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    // Finds all .html and .njk files in pages
    return gulp.src('pages/**/*.+(html|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['templates']
    }))
    // Output files in dist folder
    .pipe(gulp.dest('dist'))
  });