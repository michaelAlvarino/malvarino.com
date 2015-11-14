import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import sass from 'gulp-sass';
import image from 'gulp-image';
import * as copy from 'gulp-copy';

const config = {
	port: 3000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/**/*.html',
		dist: './dist',
		mainJs: './src/main.js',
		sassSrc: './src/**/*.scss',
		js: './src/**/*.js',
		img: './src/img/*',
		ico: './src/img/*.ico'

	}
};

gulp.task('ico', () => {
	return gulp.src(config.paths.ico)
	.pipe($.copy(config.paths.dist));
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

gulp.task('default',['js', 'html', 'sass', 'images', 'watch']);