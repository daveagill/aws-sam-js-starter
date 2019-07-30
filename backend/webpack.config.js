const path = require('path');
const { readdirSync } = require('fs')

function listDirs(rootDir) {
    return readdirSync(rootDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
}

const lambdaEntryPoints =
    listDirs('./lambdas')
        .reduce((entries, dir) => {
            entries[dir] = `./lambdas/${dir}/app.js`
            return entries
        }, {});

module.exports = {
    mode: "development",
    entry: lambdaEntryPoints,
    output: {
        path: path.resolve(__dirname, 'build/lambdas'),
        filename: '[name]/bundle.js',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre'
            }
        ]
    },
    target: 'node'
};