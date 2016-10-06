'use strict';

const gulp = require('gulp'),
	postCss=require('gulp-postcss'),
	simpleVars= require('postcss-simple-vars'),
	nested= require('postcss-nested'),
	customMedia= require('postcss-custom-media'),
	mediaMinMax= require('postcss-media-minmax'),
	cssNano =require('cssnano');

let postCssPlugins=[
	simpleVars,
	nested,
	customMedia,
	mediaMinMax,
	cssNano({
		autoprefixer:{
			add:true
		},
		core:false
	})
];

gulp.task('styles', ()=>{
	gulp.src('./src/*.css')
	.pipe(postCss(postCssPlugins))
	.pipe(gulp.dest('./dist'));
});

gulp.task('default',() =>
	gulp.watch('./src/*.css',['styles'])
);