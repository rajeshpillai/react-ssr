const path = require('path');
module.exports = {
    // Tell webpack the root file
    entry: './src/client/client.js',

    // Output file location (babel)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',  // for some async stuff
                        ['env', { targets: { browers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}