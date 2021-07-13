const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.ts',
        theme: './src/theme/index.ts',
        box: './src/components/Box/types.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$|tsx/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                },
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
               
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx','.js'],
    },
    plugins: [
        new webpack.CleanPlugin(),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist')
    },

}