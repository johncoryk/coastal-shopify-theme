const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');

gulp.task('sass', function () {
	return gulp
		.src('./assets/scss/application.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(clean({ compatibility: 'ie11' }))
		.pipe(gulp.dest('./assets'));
});

gulp.task('watch', function () {
	gulp.watch('./assets/scss/*.scss', gulp.series('sass'));
	themeKit.command('watch', {
		allowLive: true,
		env: 'development',
	});
});
