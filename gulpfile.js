const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

const inputTemplates = 'pages/**/*.+(html|njk)';

gulp.task('nunjucks', function() {
    // nunjucksRender.nunjucks.configure(['./templates/']);
    // Gets .html and .nunjucks files in pages
    return gulp.src(inputTemplates)
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['templates']
    }))
    // output files in dist folder
    .pipe(gulp.dest('output'))
  });