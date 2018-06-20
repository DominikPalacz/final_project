var path = require('path');
var Html = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        "whatwg-fetch",
        "./src/js/Main.jsx",
        "./src/sass/main.scss"
        ],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                new require('autoprefixer')({
                                    browsers: [
                                        'ie 11'
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [ path.resolve(__dirname,"src/sass") ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            }
        ]
    },
    plugins: [
        new Html({
            filename: 'index.html',
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/main.css"
        })

    ]
}