const {src, dest, parallel, series, watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const notify = require ("gulp-notify");
const rename = require ("gulp-rename");
const autoprefixer = require ("gulp-autoprefixer");
const cleanCSS = require ("gulp-clean-css");
const sourcemaps = require ("gulp-sourcemaps");
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const ttf2woff = require ("gulp-ttf2woff");
const ttf2woff2 = require ("gulp-ttf2woff2");
const del = require ("del");
const webpack = require ("webpack");
const webpackStream = require ("webpack-stream");
const imagemin = require ("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;
const webp = require('gulp-webp');
const concat = require('gulp-concat');


const styles = () => {
	return src ("./src/css/**/*.css")
	.pipe (sourcemaps.init())
	.pipe(sass({
		outputStyle: "expanded"
	}
	).on('error', notify.onError()))
	.pipe(rename({
		suffix: ".min"
	}))
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(cleanCSS({
		level: 2
	}))
	.pipe (sourcemaps.write("."))
	.pipe(dest("./app/css/"))
	.pipe (browserSync.stream())
}

const htmlInclude = () => {
	return src(["./src/index.html"])
	.pipe(fileinclude({
		prefix: '@',
     	basepath: '@file'
	}))
	.pipe(dest("./app"))
	.pipe (browserSync.stream())
}

const fonts = () => {
	src ("./src/fonts/**/*.ttf")
	.pipe (ttf2woff())
	.pipe (dest("./app/fonts/"))

	return src ("./src/fonts/**/*.ttf")
	.pipe (ttf2woff2())
	.pipe (dest("./app/fonts/"))
}

const scripts = () => {
    return src("./src/js/scripts/main.js")
        .pipe(concat("main.js"))
        .pipe(sourcemaps.init())
        .pipe (uglify().on('error', notify.onError()))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write("."))
        .pipe(dest("./app/js"))
        .pipe(browserSync.stream())
}

const libsJsToApp = () => {
    return src("./src/js/libs/*.js")
    .pipe(dest("./app/js"))
}




const imgCom = () => {
    return src(["./src/img/**/*.jpg", "./src/img/**/*.png", "./src/img/**/*.jpeg", "./src/img/**/*.svg"])
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(webp())
        .pipe(dest("./app/img"))
}


const resourses = () => {
	return src ("./src/resourses/**")
	.pipe(dest("./app"))
}

const clean = () => {
	return del (["app/*"])
}




const watchFiles = () => {
	browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

	watch("./src/css/**/*.css", styles);
	watch("./src/index.html", htmlInclude);
	watch("./src/img/**/*.jpg", imgCom);
	watch("./src/resourses/**", resourses);
	watch("./src/fonts/**/*.ttf", fonts);
	watch("./src/js/**/*.js", scripts);
}



exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;
exports.default = series(clean, parallel(htmlInclude,  scripts, libsJsToApp, fonts, resourses, imgCom), styles, watchFiles);




