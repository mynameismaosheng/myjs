var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',

    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle-[hash].js'
    },

    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true
    },

    module: { // loaders的配置
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            } 
        ]
    },
    
    plugins: [ //webpack 使用的插件的配置
        new webpack.BannerPlugin("This belongs to Maunsell"),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin() //热加载插件
        ,new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dyr: false
        })
    ]
}