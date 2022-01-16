import webpack from 'webpack-stream';
// import babel from 'gulp-babel';
// import uglify from 'gulp-uglify';
// import size from 'gulp-size';

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message  %>'
            })
        ))
        // .pipe(babel())
        // .pipe(uglify())
        // .pipe(size({ title: 'minified:' }))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'index.js'
            },
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}
