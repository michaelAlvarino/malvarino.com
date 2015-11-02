import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import sass from 'gulp-sass';

const config = {
	port: 3000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/**/*.html',
		dist: './dist',
		mainJs: './src/main.js',
		sassSrc: './src/**/*.scss',
		js: './src/**/*.js'
	}
};

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
});

gulp.task('default',['js', 'html', 'sass', 'watch']);