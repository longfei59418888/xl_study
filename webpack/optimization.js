module.exports = {
    //...
    optimization: {
        // 建立模块及其子模块间的依赖，并优化(不重复，分割，合并)
        splitChunks: {
            /*
            * chunks 模块优化范围(需要被优化的模块)
            * async  异步模块
            * all 所有模块(同步和非同步可共享)
            * initial  初始模块(入口位置)
            * */
            chunks: 'async',
            // 生成模块的最小单位
            minSize: 20000,
            minRemainingSize: 0,
            //
            maxSize: 0,
            minChunks: 1,
            // 按需加载模块最大并行请求数
            maxAsyncRequests: 30,
            // 入口页面的按需加载模块最大并行数
            maxInitialRequests: 30,
            // 源代码名与模块chunk名中间分隔符
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};
