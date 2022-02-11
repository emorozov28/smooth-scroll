const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const config = {
    entry: './src/index.js',
    mode: 'production',
    output: {},
    devtool: isProd ? false : 'source-map',
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};

const configDev = {
    ...config,
    output: {
        library: 'SmoothScroll',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'demo'),
        filename: 'index.js'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: false
        })
    ],
}

const configProd = {
    ...config,
    output: {
        library: 'SmoothScroll',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
}


module.exports = [configDev, configProd];
