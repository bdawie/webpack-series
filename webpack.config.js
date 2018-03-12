const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin('main.css');

module.exports = {
    mode:'production',
    entry:'./src/js/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/dist'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env']
                        }
                    }
                
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins:[
        extractPlugin
    ]
};