var gulp = require("gulp");
var gutil = require("gulp-util");
var vinylPaths = require("vinyl-paths");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var cleancss = require("gulp-clean-css");
//var browserSync = require("browser-sync").create();
var browserSync = require("browser-sync");
var seq = require("run-sequence");
var webpack = require("webpack");

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

//var bundler = webpack(webpackBuildConfig);
//var webpackstream = require("webpack-stream");

/*
 |--------------------------------------------------------------------------
 | Gulpfile commands:
 |  gulp serve          // Proxy Server für browser-sync + filewatcher / compiliert automatisch bei Änderungen
 |  gulp --env prod     // compiliert für production
 |  gulp --env dev      // compiliert für entwicklung
 |  gulp                // compiliert für entwicklung
 |  gulp sass           // compiliert nur sass
 |  gulp concat-js      // baut buil.js und komprimiert es
 |--------------------------------------------------------------------------
 */

var pathJSdev, pathJSprod, JSbuildfile, JSsourcefile, CSSbuildfile;
var pathRoot = "";
var pathContent = "Content/";
var pathCSS = pathRoot + "Content/";
var pathSASS = pathRoot + "src/sass/";

if (gutil.env.env === "prod") {
  console.log("Building for RELEASE environment...");
  pathJSdev = pathRoot + "Content/js/dev/";
  pathJSprod = pathRoot + "Content/js/";
  JSbuildfile = "build.js";
  JSsourcefile = "build-dev.js";
  CSSbuildfile = "styles.css";
} else {
  console.log("Building for DEBUG environment...");
  pathJSdev = pathRoot + "Content/js/dev/";
  pathJSprod = pathRoot + "Content/js/";
  JSbuildfile = "build.js";
  JSsourcefile = "build-dev.js";
  CSSbuildfile = "styles.css";
}

gulp.task("default", ["concat-js", "sass"]);

gulp.task("scripts", function () {
  return seq("concat-js", "minify-js");
});

gulp.task("sass", function () {
  console.log("Compiling sass");
  return gulp
    .src(pathSASS + "main.scss")
    .pipe(
      vinylPaths(function (paths) {
        console.log("Compiling: ", paths);
        console.log("buildpath: " + CSSbuildfile);
        return Promise.resolve();
      })
    )
    .pipe(sass())
    .pipe(rename(CSSbuildfile))
    .pipe(gulp.dest(pathCSS));
});

gulp.task("minify-css", ["sass"], function () {
  console.log("Minifying css");
  return gulp
    .src(pathCSS + CSSbuildfile)
    .pipe(cleancss())
    .pipe(gulp.dest(pathCSS));
});

/*
gulp.task("webpack", function(callback) {
  gulp
    .src("src/index.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("dist/"));
  gulp.start("serve");
});
*/

gulp.task("webpack", function (callback) {
  // startet den kompletten webpack build
  gulp.start("serve").pipe(
    webpack(webpackBuildConfig, function (err, stats) {
      if (err) throw new gutil.PluginError("webpack:build", err);
      gutil.log("[webpack:build]", stats.toString({
        colors: true
      }));
      callback();
    })
  );
});

gulp.task("serve", function () {
  console.log("Browser Sync braucht noch ne Runde ...");
  browserSync.init({
    //proxy: "localhost:35840",
    host: "localhost",
    port: 3000,
    server: "./Content",
    files: [
      "Content/*.html"
      //      "Content/css/*.css",
      //      "Content/js/*.js",
      //      "views/**/*.cshtml"
    ],
    //   reloadDebounce: 2000,
    notify: false,
    browser: "firefox",
    injectChanges: false
  });

  gulp.watch("Content/**/*.html", browserSync.reload);

  //  gulp.watch("src/components/**/*.vue", ["webpack", browserSync.reload]);
  //  gulp.watch("src/components/**/*.cshtml", ["webpack", browserSync.reload]);
  //gulp.watch('src/sass/**/*.scss', ['webpack', browserSync.reload]);

  //  gulp.watch("src/sass/**/*.scss", ["sass", "minify-css", browserSync.reload]);
  //  gulp.watch("src/**/*.js", ["webpack", browserSync.reload]);
  //gulp.watch('Content/js/**/*.js', ['concat-js' , browserSync.reload]);
});

gulp.task("servewebpack", function () {
  console.log("Browser Sync startet webpack ...");
  webpack(webpackBuildConfig, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
  });
  browserSync.init({
    //proxy: "localhost:35840",
    host: "localhost",
    port: 3000,
    server: "./Content",
    files: [
      "Content/*.html"
      //      "Content/css/*.css",
      //      "Content/js/*.js",
      //      "views/**/*.cshtml"
    ],
    //   reloadDebounce: 2000,
    notify: false,
    browser: "firefox",
    injectChanges: false
  });

  gulp.watch("Content/**/*.html", browserSync.reload);

  //  gulp.watch("src/components/**/*.vue", ["webpack", browserSync.reload]);
  //  gulp.watch("src/components/**/*.cshtml", ["webpack", browserSync.reload]);
  //gulp.watch('src/sass/**/*.scss', ['webpack', browserSync.reload]);

  //  gulp.watch("src/sass/**/*.scss", ["sass", "minify-css", browserSync.reload]);
  //  gulp.watch("src/**/*.js", ["webpack", browserSync.reload]);
  //gulp.watch('Content/js/**/*.js', ['concat-js' , browserSync.reload]);
});

gulp.task("webp", function (callback) {
  browserSync({
    server: {
      baseDir: "./Content",
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackBuildConfig.output.publicPath,
          stats: {
            colors: true
          }
        }),
        webpackHotMiddleware(bundler)
      ]
    },
    files: ["./Content/**/*.css", "Content/**/*.html"]
  });
});

gulp.task("webpacks", function (callback) {
  console.log("starte webpack");

  webpackstream(webpackBuildConfig).pipe(
    gulp.dest(
      webpackBuildConfig.output.publicPath + webpackBuildConfig.output.filename
    )
  );

  console.log("Browser Sync braucht noch ne Runde ...");
  browserSync.init({
    //proxy: "localhost:35840",
    host: "localhost",
    port: 3000,
    server: "./Content",
    files: ["Content/*.html"], //   reloadDebounce: 2000,
    //      "Content/css/*.css",
    //      "Content/js/*.js",
    //      "views/**/*.cshtml"
    notify: false,
    browser: "firefox",
    injectChanges: false
  });

  gulp.watch("Content/**/*.html", browserSync.reload);
  gulp.watch("Content/**/*.css", browserSync.reload);
  gulp.watch("Content/**/*.js", browserSync.reload);
});

gulp.task("start", function (callback) {
  /*
  webpackstream(webpackBuildConfig).pipe(
    gulp.dest(
      webpackBuildConfig.output.publicPath + webpackBuildConfig.output.filename
    )
  );
*/
  var webpackBuildConfig = require("./webpack.config.js");
  process.env.NODE_ENV = "development";

  webpack(webpackBuildConfig, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    console.log("\x1b[34m WEBPACK IST FERTIG, WARTE NUN AUF USER ...");
  });

  console.log(
    "Starte BrowserSync und Webpack, bitte warten bis Webpack meldet das es fertig ist ..."
  );
  browserSync.init({
    proxy: "localhost:50735",
    host: "localhost",
    port: 3000,
    //server: "./Content",
    files: ["Content/*.html"], //   reloadDebounce: 2000,
    //      "Content/css/*.css",
    //      "Content/js/*.js",
    //      "views/**/*.cshtml"
    notify: false,
    browser: "firefox",
    injectChanges: false
  });

  gulp.watch("Content/**/*.html", [
    "apply-dev-environment",
    browserSync.reload
  ]);
  gulp.watch("Content/**/*.css", browserSync.reload);
  gulp.watch("Content/**/*.js", browserSync.reload);
});