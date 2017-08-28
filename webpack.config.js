const path = require("path");
const webpack = require("webpack");
const output = 'public';

module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.join(__dirname, output),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, output),
        port: 8080
    },

    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [['env', {
                        modules: false,
                        targets: {browsers: ["last 2 versions"]}
                    }]]
                }
            },
            { test: /\.(css)$/, use: ['style-loader', 'css-loader']},
            { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: 'file-loader?name=fonts/[name].[ext]'},
            { test: /\.html$/, exclude: [/node_modules/], use: 'raw-loader'}

        ]
    }
};