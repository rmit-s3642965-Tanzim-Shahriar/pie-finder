

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3011
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                //loader different format in video 12:30
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        // path: path.resolve(__dirname,'./public'),
        path: path.join(__dirname,'./public'),
        filename: 'bundle.min.js'
    },
    plugins: [
        //new webpack.optimize.OccurrenceOrderPlugin()
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: false 
        })
    ],
};

