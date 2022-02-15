const webpack = require("webpack");
const path = require("path");
const Copy = require("copy-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const dotenv = require("dotenv");

const dotenvParsed = dotenv.config({ path: path.resolve("./../.env") }).parsed;

module.exports = {
    target: ["web", "es5"],
    entry: {
        "bundle": "./src/index.tsx",
        "service-worker": "./src/registerServiceWorker.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./../public"),
        publicPath: "./../"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },

    resolve: {
        extensions: ["*", ".ts", ".tsx", ".js"],
        fallback: {
            "os": require.resolve("os-browserify/browser"),
            "path": false,
            "fs": false
        },
        alias: {
            "react-dom$": "react-dom/profiling",
            "scheduler/tracing": "scheduler/tracing-profiling",
        }
    },

    performance : {
        hints : false
    },

    plugins: [
        new Copy({
            patterns: [
                { from: "src/views"},
                { from: "src/assets"},
                { from: "node_modules/tripetto/fonts/", to: "fonts/" },
                { from: "node_modules/@fortawesome/fontawesome-free/webfonts/", to: "fonts/" }
        ]
        }),
        new NodePolyfillPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenvParsed),
            "process.env.NODE_DEBUG": JSON.stringify(process.env.NODE_DEBUG)
        }),
        new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		})
    ],
    optimization: {
        minimize: true,
        mangleExports: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
    },
    stats: {
        children: true
    },
    devServer: {
        historyApiFallback: true,
    }
};