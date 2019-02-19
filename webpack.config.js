"use strict";
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: 'bundled.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 
                    {
                        loader: "style-loader"
                    },
                    {
                       loader: MiniCssExtractPlugin.loader,
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]--[hash:base64]',
                            sourceMap: true,
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin,
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })]
};

//npm run start
//npm run build for production