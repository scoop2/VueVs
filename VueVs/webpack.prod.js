const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const proxy = require('http-proxy-middleware');

//const LiveReloadPlugin = require("webpack-livereload-plugin");
//const webpackHotMiddleware = require("webpack-hot-middleware");
//const webpackDevMiddleware = require("webpack-dev-middleware");
//const LiveReloadPlugin = require("css-hot-loader");

//const WatchIgnorePlugin = require("watch-ignore-webpack-plugin");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CompressionPlugin = require("compression-webpack-plugin");
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: {
        main: ["./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "Content"),
        publicPath: "Content",
        filename: "build.js"
    },
    watch: false,
    module: {
        rules: [{
                exclude: "/node_modules/"
            },
            {
                test: /\.html$/,
                loader: "vue-loader",
                options: {
                    extractCSS: false
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                include: path.resolve(__dirname, "src/components"),
                options: {
                    extractCSS: false
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "src"),
                options: {
                    compact: true
                }
            },
            {
                test: /\.cshtml$/,
                loader: "babel-loader",
                options: {
                    compact: true
                }
            },

            {
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            minimize: true,
                            indentedSyntax: false // Set to true to use indented SASS syntax.
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.common.js"
        },
        symlinks: false
    },
    performance: {
        hints: false
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
        /*
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: "localhost",
          port: 3000,
          //   proxy: "http://localhost:8080/"
          server: { baseDir: ["./Content"] }
        })
        */
        //new WatchIgnorePlugin([path.resolve(__dirname, "/node_modules/")])
    ],
    cache: false,
    stats: {
        errorDetails: true
    }
};