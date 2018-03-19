/**
 * Created by jahv on 2017/2/15.
 */
import gulp from 'gulp';
import babel from 'gulp-babel'
import sass from 'gulp-sass'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import path from 'path'
import gulpUtil from 'gulp-util'
import fs from 'fs'
import {execSync} from 'child_process'
import {argv} from 'optimist';

gulp.task('script', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})