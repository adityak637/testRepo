const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

        // Get the root path (assuming webpack config is in the root of your project!)
        const currentPath = path.join(__dirname);

        // Create the fallback path (the production .env)
        const basePath = currentPath + '/env/.env';
    
        // We're concatenating the environment name to our filename to specify the correct env file!
        const envPath = basePath + '.' + env.ENVIRONMENT;
    
        // Check if the file exists, otherwise fall back to the production .env
        const finalPath = fs.existsSync(envPath) ? envPath : basePath;
    
        // Set the path parameter in the dotenv config
        const fileEnv = dotenv.config({ path: finalPath }).parsed;
    
        // reduce it to a nice object, the same as before (but with the variables from the file)
        const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
            return prev;
        }, {});

    return ({
        entry: {
            index: './src/index.js',
        },
        output: {
            path: path.join(__dirname, '/build'), //build folder
            filename: 'js/[name].bundle.js', //bundle file name
            publicPath: '/',
        },
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 20000,
                minRemainingSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                enforceSizeThreshold: 50000,
                cacheGroups: {
                  defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                        chunks: 'all',
                        minSize: 20000,
                        maxSize: 249856,
                    priority: -10,
                    reuseExistingChunk: true,
                  },
                  default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                  },
                },
            },
        },
        devServer: {
            host: 'localhost',
            port: '8081',
            historyApiFallback: true,
        },
        module: { 
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_module/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {

                    test: /\.s(a|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader, // "style-loader" // creates style nodes from JS strings
                        },
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        },
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader, // "style-loader" // creates style nodes from JS strings
                        },
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                        },
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(ttf|otf|woff|eot|woff2)$/i,
                    type: "asset/resource",
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.ProvidePlugin({
                "React": "react",
            }),
            new webpack.DefinePlugin(envKeys),
            new MiniCssExtractPlugin({
                // plugin for controlling how compiled css will be outputted and named
                filename: "css/[name].css",
                chunkFilename: "css/[id].css",
            }),
        ]
    });
}
