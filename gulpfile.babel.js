//
// import gulp deps
import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import sass from 'gulp-sass';
import image from 'gulp-image';
import gulpCopy from 'gulp-copy';
import config from './gulp-config';

// copy over favicon...
gulp.task('ico', () => {
	gulp.src(config.paths.ico)
		.pipe(gulpCopy(config.paths.dist));
});

gulp.task('images', () => {
	gulp.src(config.paths.img)
		.pipe(image())
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('js', () => {
	browserify(config.paths.mainJs)
		.transform(babelify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'));
});

gulp.task('server', () => {

})

gulp.task('sass', () => {
  gulp.src(config.paths.sassSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('html', () => {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', () => {
	gulp.watch(config.paths.sassSrc, ['sass']);
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
	gulp.watch(config.paths.img, ['images'])
});

gulp.task('default',['js', 'ico', 'html', 'sass', 'images', 'watch']);
