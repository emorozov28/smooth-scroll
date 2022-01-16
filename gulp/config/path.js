import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: `${buildFolder}/`,
        img: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        fonts: `${buildFolder}/fonts/`,
        js: `${buildFolder}/js/`,
        files: `${buildFolder}/img/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        img: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp, ico}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/index.scss`,
        js: `${srcFolder}/js/script.js`,
        files: `${srcFolder}/img/**/*.*`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        img: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp, ico, svg}`,
        scss: `${srcFolder}/scss/index.scss`,
        js: `${srcFolder}js/**/*.js`,
        files: `${srcFolder}/img/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'emorozov.top/www/test/'
}