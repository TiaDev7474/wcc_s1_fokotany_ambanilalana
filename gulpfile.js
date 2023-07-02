const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const paths = {
  styles: {
    src: ["./src/styles/*.css"],
    dest: "./dist/",
  },
  html: {
    src: ["./src/pages/*.htm"],
    dest: "./dist/",
  },
  img: {
    src: ["./src/assets/*"],
    dest: "./dist/img/",
  },
};

/* STYLES */
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

/* HTML */
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

/* IMAGES */
function images() {
  return gulp
    .src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest))
    .pipe(browserSync.stream());
}

/* FUNCTIONS */
function watch() {
  browserSync.init({
    server: {
      baseDir: "./src/*",
    },
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.img.src, images);
  gulp.watch(paths.html.src, html);
}

/* GULP TASKS */
exports.default = watch;
exports.build = gulp.series(style, html, images);