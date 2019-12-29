const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Webpack configuration used in production (yarn build/npm run-script build)
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename: `[name].[contentHash].js`,
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin('build'),
        new CopyWebpackPlugin([
            {
                from: 'public/icon.png',
                to: '.',
            },
        ]),
    ],
});
