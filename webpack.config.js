const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/App.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        filename: "index.html",
    })]
};