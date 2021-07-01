const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist')

    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackplugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}

