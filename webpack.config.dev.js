const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 4000,
        hot: true,
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    target: 'electron-renderer',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: /src/,
                use: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|jpg|png)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({ template: './src/index.html' })
    ]
}