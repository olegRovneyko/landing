var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

gulp.task('server', function() {
	browserSync.init({
		server: {
			port: 9000,
			baseDir: "build"
		}
	});
});

gulp.task('templates:compile', function() {
	return gulp.src('src/templates/index.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('build'))
});

gulp.watch('build/**/*').on('change', browserSync.reload);