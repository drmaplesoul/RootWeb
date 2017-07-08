/**
 * Created by Administrator on 2017/6/12 0012.
 */
const path = require('path');
const webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH,"dist");

module.exports = {
    entry: {
        vendor: ['react', 'react-dom',"jquery","antd"]
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].dll.js',
        /**
         * output.library
         * 将会定义为 window.${output.library}
         * 在这次的例子中，将会定义为`window.vendor_library`
         */
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            /**
             * path
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。
             */
            name: '[name]_library'
        }),
        //压缩
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        //new webpack.DefinePlugin({
        //    'process.env':{
        //        'NODE_ENV': JSON.stringify('production')
        //    }
        //}),
    ]
};