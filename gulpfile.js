import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = { 
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path, 
    gulp, 
    plugins 
}

import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { js } from './gulp/tasks/js.js';
import { server } from './gulp/tasks/server.js';
import { ftp } from './gulp/tasks/ftp.js';


function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
}


const mainTasks = gulp.series(gulp.parallel( html, js));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev, build, deployFTP }

gulp.task('default', dev);