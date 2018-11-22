const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Buding for nodeJS
    target: 'node',

    // Tell webpack the root file
    entry: './src/index.js',

    // Output file location (babel)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    //  Do not bundle any library on server (node_modules)
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);