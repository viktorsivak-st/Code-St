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
	.pipe (webpackStream({
		output: {
			filename: "main.js"
		},
		module: {
		  rules: [
		    {
		      test: /\.m?js$/,
		      exclude: /node_modules/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: [
		            ['@babel/preset-env', { targets: "defaults" }]
		          ]
		        }
		      }
		    }
		  ]
		}
	}))
	.pipe (sourcemaps.init())
	.pipe (uglify().on('error', notify.onError()))
	.pipe(rename({
		suffix: ".min"
	}))
	.pipe (sourcemaps.write("."))
	.pipe (dest ("./app/js/"))
	.pipe (browserSync.stream());
}




const imgToApp = () => {
	return src(["./src/img/**/*.jpg", "./src/img/**/*.png", "./src/img/**/*.jpeg", "./src/img/**/*.svg"])
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
	watch("./src/img/**/*.jpg", imgToApp);
	watch("./src/img/**/*.jpeg", imgToApp);
	watch("./src/img/**/*.png", imgToApp);
	watch("./src/resourses/**", resourses);
	watch("./src/fonts/**/*.ttf", fonts);
	watch("./src/js/**/*.js", scripts);
}



exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;

exports.default = series(clean, parallel(htmlInclude,  scripts, fonts, resourses, imgToApp), styles, watchFiles);



const stylesBuild = () => {
	return src ("./src/css/**/*.css")
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
	.pipe(dest("./app/css/"))
}
const scriptsBuild = () => {
	return src("./src/js/main.js")
	.pipe (webpackStream({
		output: {
			filename: "main.js"
		},
		module: {
		  rules: [
		    {
		      test: /\.m?js$/,
		      exclude: /node_modules/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: [
		            ['@babel/preset-env', { targets: "defaults" }]
		          ]
		        }
		      }
		    }
		  ]
		}
	}))
	.pipe (uglify().on('error', notify.onError()))
	.pipe(rename({
		suffix: ".min"
	}))
	.pipe (dest ("./app/js/"))
}

const imgCom = () => {
	return src(["./src/img/**/*.jpg", "./src/img/**/*.png", "./src/img/**/*.jpeg", "./src/img/**/*.svg"])
	.pipe(imagemin({
		progressive: true,
    	optimizationLevel: 10,
	}))
	.pipe(dest("./app/img"))
}





exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, resourses,  imgCom), stylesBuild);