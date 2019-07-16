const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const nunjucksRender = require('gulp-nunjucks-render');

// gulp.task('serve', ['sass', 'nunjucks-html-watch'], function() {
//     browserSync.init({
//         server: './dist'
//     });

//     gulp.watch('css/dev/*.scss', ['sass']);
//     gulp.watch('./**/*.html', ['nunjucks-html-watch'])
// });

gulp.task('serve', function() {
    browserSync.init({
        server: './dist'
    });

    // gulp.watch('css/dev/*.scss', ['sass']);
    // gulp.watch('./**/*.html', ['nunjucks-html-watch'])
});

gulp.task('sass', function() {
    return gulp.src('css/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

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

//ensures 'nunjucks' is complete before reloading browser
// gulp.task('nunjucks-html-watch', ['nunjucks'], function() {
//       browserSync.reload();
//   });

gulp.task('default', 
    gulp.series('sass', 'nunjucks', 'serve'));