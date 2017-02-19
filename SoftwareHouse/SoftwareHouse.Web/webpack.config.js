const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

const paths = {
    outputDir: './wwwroot/dist'
};

const config = {
        entry: {
            // Bundles used on specific pages
            homepage: './Frontend/Homepage/index.tsx',
            // Common libraries
            libs: [
                'bootstrap', 
                'bootstrap/dist/css/bootstrap.css', 
                'react',
                'react-dom', 
                'jquery'
            ]
        },
        resolve: { 
            extensions: [ '.js', '.jsx', '.ts', '.tsx' ] 
        },
        output: {
            path: path.join(__dirname, paths.outputDir),
            filename: '[name].js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                { 
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/, 
                    use: 'url-loader?limit=50000&name=assets/[name]_[hash].[ext]'
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader', 'awesome-typescript-loader?silent=true']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                { 
                    test: /\.(css|scss)$/, 
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.ProvidePlugin({ 
                $: 'jquery', 
                jQuery: 'jquery'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "commons",
                filename: "commons.js",
            }),
            new webpack.SourceMapDevToolPlugin({
                moduleFilenameTemplate: path.relative(paths.outputDir, '[resourcePath]')
            })
        ]
};

module.exports = config;