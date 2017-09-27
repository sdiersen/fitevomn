var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');


var jsSources = [
	'node_modules/jquery/dist/jquery.min.js',
	'node_modules/bootstrap/dist/js/bootstrap.min.js',
	'node_modules/tether/dist/js/tether.min.js',
	'components/scripts/*.js'
];
// var sassSources = [
// 	'node_modules/bootstrap/scss/bootstrap.scss',
// 	'components/sass/style.scss'
// ];

var cssSources = [
	'node_modules/bootstrap/dist/css/bootstrap.min.css',
	'components/css/*.css'
];

var htmlSources = [
	'builds/development/*.html'
];
var jsonSources = [
	'builds/development/js/*.json'
];

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
		.pipe(connect.reload())
});

gulp.task('css', function() {
	gulp.src(cssSources)
		.pipe(concat('style.css'))
		.pipe(gulp.dest('builds/development/css'))
		.pipe(connect.reload())
});

// gulp.task('compass', function() {
// 	gulp.src(sassSources)
// 		.pipe(compass({
// 			sass: 'components/sass',
// 			image: 'builds/development/images',
// 			style: 'expanded' //nested, expanded, compact, compressed
// 		})
// 			.on('error', gutil.log))
// 		.pipe(gulp.dest('builds/development/css'))
// 		.pipe(connect.reload())
// });

gulp.task('html', function() {
	gulp.src(htmlSources)
		.pipe(connect.reload())
});

gulp.task('json', function() {
	gulp.src(jsonSources)
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	//gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch(cssSources, ['css']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsonSources, ['json']);
});


gulp.task('connect', function() {
	connect.server({
		root: 'builds/development', //where the files that we want to run are
		livereload: true
	});
})

gulp.task('default', ['html','json', 'js', 'css', 'connect', 'watch']);