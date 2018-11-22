const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    // Tell webpack the root file
    entry: './src/client/client.js',

    // Output file location (babel)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
};

module.exports = merge(baseConfig, config);