module.exports = {
    entry: __dirname + "/src/index.js",

    output:{
        path: __dirname + "/dist",
        filename: "bundle.js"
    },

    module: {
        loaders:[{
            test: /\.js$/,   //需要匹配的文件扩展名
            exclude: /node_modules/, // 排除不需要处理的文件夹
            loader: 'babel-loader', //  所用的loader名称
            query:{
                presets: ['es2015', 'react']  // 支持es5与react
            }
        }]
    },

    devServer:{
        contentBase: "./dist", //读取目录
        port: 8000,   //端口号
        inline: true, //实时刷新
        historyApiFallback: true //单页面不跳转
    },
}