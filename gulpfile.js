
var browserSync = require('browser-sync');
var gulp = require('gulp')
var sass = require('gulp-sass')
var watch = require('gulp-watch')
var reload = browserSync.reload;


var path ={
    src:{
        html: 'app/*.html',
        css: 'app/css/*.css',
        js: 'app/js/*.js',
        scss: 'app/scss/*.scss',
        fonts: 'app/fonts/**/*.*',
        images: 'app/images/**/*.*'
    },
    watch:{
        html: 'app/*.html',
        css: 'app/css/*.css',
        js: 'app/js/*.js',
        scss: 'app/scss/*.scss',
        fonts: 'app/fonts/**/*.*',
        images: 'app/images/**/*.*'
    }
}

gulp.task('server',()=>{
    browserSync({
        server:{
            baseDir: 'app'
        },
        notify: 'false'
    });
});

gulp.task('sass', ()=>{
    return gulp.src(path.src.scss)
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch',()=>{
    gulp.watch([path.watch.css], browserSync.reload).on('change',()=>{
        console.log('as');
    })
    gulp.watch([path.watch.js],browserSync.reload)
    gulp.watch([path.watch.html], browserSync.reload)
    gulp.watch([path.watch.scss],gulp.series('sass'));
})
gulp.task('start',gulp.parallel('server','sass','watch'));