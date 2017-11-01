var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');


var jsSources = [
	'components/scripts/*.js'
];
// var sassSources = [
// 	'node_modules/bootstrap/scss/bootstrap.scss',
// 	'components/sass/style.scss'
// ];

var cssSources = [
	'components/css/1-basestyles.css',
	'components/css/1-color.css',
	'components/css/home.css',
	'components/css/links.css',
	'components/css/media.css'
];

var cssHome = [
	'components/css/nav.css'
];
var cssHome2 = [
	'components/css/nav2.css'
];

var cssBuffalo = [
	'components/css/1-basestyles.css',
	'components/css/1-color.css',
	'components/css/links.css',
	'components/css/buffalo/buffalo.css'
];

var htmlSources = [
	'builds/development/*.html',
	'builds/development/buffalo/*.html'
];
var jsonSources = [
	'builds/development/js/*.json'
];

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
		.pipe(connect.reload())
});

gulp.task('css', function() {
	gulp.src(cssSources)
		.pipe(concat('style.css'))
		.pipe(gulp.dest('builds/development/css'))
		.pipe(connect.reload())
});

gulp.task('css2', function() {
	gulp.src(cssHome)
		.pipe(concat('homeNav.css'))
		.pipe(gulp.dest('builds/development/css'))
		.pipe(connect.reload())
});

gulp.task('css3', function() {
	gulp.src(cssHome2)
		.pipe(concat('home2Nav.css'))
		.pipe(gulp.dest('builds/development/css'))
		.pipe(connect.reload())
});

gulp.task('css4', function() {
	gulp.src(cssBuffalo)
		.pipe(concat('buffalo.css'))
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
	gulp.watch(cssHome, ['css2']);
	gulp.watch(cssHome2, ['css3']);
	gulp.watch(cssBuffalo, ['css4']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsonSources, ['json']);
});


gulp.task('connect', function() {
	connect.server({
		root: 'builds/development', //where the files that we want to run are
		livereload: true
	});
})

gulp.task('default', ['html','json', 'js', 'css', 'css2', 'css3', 'css4', 'connect', 'watch']);