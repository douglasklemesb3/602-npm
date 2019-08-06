const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


gulp.task('compilar-scripts',function(){
    return gulp.src('js/*.js')//endereço dos scripts
        .pipe(concat('scripts.js'))//juntar todos os scripts
        .pipe(uglify())//minificar o JavaScript
        .pipe(gulp.dest('minify'))
})

gulp.task('compilar-css',function(){
    return gulp.src('css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('style'))
})