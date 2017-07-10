var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require("html-webpack-plugin" );

//一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,"src");
var BUILD_PATH = path.resolve(ROOT_PATH,"dist");

module.exports = {
    entry: {
        app:path.resolve(APP_PATH,"app.jsx"),
    },
    output: {
        path:BUILD_PATH,
        filename: '[name].js',
        publicPath:ROOT_PATH,
    },
    //开启dev source map
    devtool:"eval-source-map",
    //开启webpack dev server
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
    },
    module: {
        //rules:[
        //    {
        //        test:/\.jsx$/,
        //        loaders:["eslint"],
        //        include:BUILD_PATH
        //    }
        //],
        loaders: [
            {
                test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
                loader: "babel-loader",
                query: {presets: ['es2015']},
                //exclude: /node_modules/
                include:APP_PATH
            },

            {   test: /\.css|scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
                include:APP_PATH
            },
            //{   test: /\.css$/,
            //    loader: "style-loader!css-loader",
            //    include:APP_PATH
            //},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192',include:APP_PATH},

        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss', '.jsx']
    },
    plugins: [
        //new HtmlwebpackPlugin({title:"My First React App"),
        //提取公共文件
        //new webpack.optimize.CommonsChunkPlugin({names:["common"],filename:"[name].js"}),
        //new webpack.DefinePlugin({
        //    'process.env': { NODE_ENV: JSON.stringify("production") }
        //}),
        new ExtractTextPlugin("styles.css"),

        //如需压缩js文件，将以下注释去掉
        //new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        //}),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(path.join(BUILD_PATH,"vendor-manifest.json"))//'./dist/js/vendor-manifest.json'
        }),

    ]
};
