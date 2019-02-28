// webpack的主配置文件 微博pack.config.js
module.exports = {
    //打包后的结果中仍保留换行/空白，便于阅读
    //mode: 'development',
    // 不保留换行/空白
    mode: 'production',
    // 打包的入口文件
    entry: './src/index.js',

    // 打包后得到的输出文件
    output: {
        // 绝对路径
        path: __dirname + './build/',
        filename: 'app.js'
    },


    // loader加载器——打包非js模块
    // 在index.js中依赖./css下的两个css文件
    module:{
        rules:[
            {
                // 判定加载的模块匹配规则
                test:/\.css$/,
                // 查看手册的制定加载器
                use:['style-loader','css-loader']
            }
        ]
    }
};