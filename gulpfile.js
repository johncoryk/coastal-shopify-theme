const gulp = require('gulp');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const themeKit = require('@shopify/themekit');

gulp.task('minify', () => {
	return gulp
		.src('./assets/styles/application.css')
		.pipe(clean({ compatibility: 'ie11' }))
		.pipe(
			rename({
				basename: 'bundle',
				suffix: '.min',
			})
		)
		.pipe(gulp.dest('./assets'));
});

gulp.task('watch', function () {
	gulp.watch('./assets/styles/application.css', gulp.series('minify'));
	themeKit.command('watch', {
		allowLive: true,
		env: 'development',
	});
});
