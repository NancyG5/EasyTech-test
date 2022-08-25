const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.bundle.html', 
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //           from: path.resolve(__dirname, './src/images'),
        //           to:   path.resolve(__dirname, './dist/images')
        //         }
        //       ]
        //     })
    ],

    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
        ],
    },

    // mode: 'development',
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: path.resolve(__dirname, './dist'),
    //     open: true,
    //     compress: true,
    //     hot: true,
    //     port: 8080,
    // },
}