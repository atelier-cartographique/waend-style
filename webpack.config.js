
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const ROOT = path.resolve(__dirname);

module.exports = {
    context: ROOT,
    entry: {
        style: './index.js',
    },

    output: {
        path: path.resolve(ROOT, 'css'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].[hash].chunk.js'
    },


    module: {
        rules: [

            // CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },

            // LESS
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                })
            },

            //fonts
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/client/assets/edit/'
                }
            },

            //images
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/client/assets/edit/'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
    ],

};


