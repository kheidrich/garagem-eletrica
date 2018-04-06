const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    target: 'electron-renderer',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { 
                        presets: ['env', 'react'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(woff|woff2|eot|ttf|otf|jpg|png)$/, use: ['file-loader'] }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 4000,
        hot: true,
        contentBase: './dist'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({ template: './src/index.html' }),
        new copyPlugin(['./src/main.js', './package.json'])
    ]
}