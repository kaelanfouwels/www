﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var rimraf = require("rimraf");
var newer = require('gulp-newer');

var rootOutputDir = './wwwroot';

gulp.task('clean', function (cb) {
	rimraf(rootOutputDir + '/*', cb);
});

gulp.task('bootstrap', function () {
	return gulp.src('./bower_components/bootstrap/dist/**/*')
		.pipe(newer(rootOutputDir + '/'))
		.pipe(gulp.dest(rootOutputDir + '/'));
});

gulp.task('jquery', function () {
	return gulp.src('./bower_components/jquery/dist/**/*')
		.pipe(newer(rootOutputDir + '/js/'))
		.pipe(gulp.dest(rootOutputDir + '/js/'));
});

gulp.task('styles', function () {
	return gulp.src('./dev/css/*')
		.pipe(newer(rootOutputDir + '/css/'))
		.pipe(gulp.dest(rootOutputDir + '/css/'));
});

gulp.task('scripts', function () {
	return gulp.src('./dev/js/*')
		.pipe(newer(rootOutputDir + '/js/'))
		.pipe(gulp.dest(rootOutputDir + '/js/'));
});

gulp.task('pages', function () {
	return gulp.src('./dev/*')
		.pipe(newer(rootOutputDir + '/'))
		.pipe(gulp.dest(rootOutputDir + '/'));
});

gulp.task('fonta-css', function () {
	return gulp.src('./bower_components/font-awesome/css/*')
		.pipe(newer(rootOutputDir + '/css/'))
		.pipe(gulp.dest(rootOutputDir + '/css/'));
});
gulp.task('fonta-fonts', function () {
	return gulp.src('./bower_components/font-awesome/fonts/*')
		.pipe(newer(rootOutputDir + '/fonts/'))
		.pipe(gulp.dest(rootOutputDir + '/fonts/'));
});


gulp.task('watch', function () {
	gulp.watch('./dev/css/*', ['styles']);
	gulp.watch('./dev/js/*', ['scripts']);
	gulp.watch('./dev/*', ['pages']);
});


gulp.task('build', ['bootstrap', 'jquery', 'styles', 'scripts', 'pages', 'fonta-css', 'fonta-fonts']);
