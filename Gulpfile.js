const GulpClient = require('gulp');
const {src, dest, parallel, watch} = require('gulp');

const sass = require('gulp-sass');

sass.compiler = require('sass');

function cssSass() {
    return src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('./src/css/'));
}

exports.sass = function() {
    watch('./src/scss/**/*.scss', cssSass);
}