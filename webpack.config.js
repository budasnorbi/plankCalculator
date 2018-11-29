const 
    path              = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CssExtractPlugin     = new MiniCssExtractPlugin({
        filename:'style.css'
    }),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/js/app.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'app.js'
    },
    devtool: 'cheap-eval-source-map',
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[
                    'source-map-loader',
                    'babel-loader'
                ],
                enforce:"pre"
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test :/\.html$/,
                use:['html-loader']
            },
            {
                test:/\.(jpeg|png|svg)$/,
                use:[
                    { 
                        loader: 'file-loader',
                         options:{ name:'[name].[ext]',
                          outputPath:'img/',
                          publicPath: 'img/'
                        } 
                    }
                ]
            },
            {
                test: /\.(woff2?)/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        CssExtractPlugin,
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}