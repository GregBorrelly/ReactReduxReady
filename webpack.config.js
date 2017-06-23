const webpack = require("webpack");

module.exports = {

    entry: './app/src/index.js',
    output:{
        path: __dirname,
        publicPath:'/',
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        contentBase:'./build',
        port: 61116

    },
    module: {
        loaders: [
            {
                test:  /\.js$/,
                exclude:/(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react", "stage-1"]
                } 
            }
        ]
    }
}

