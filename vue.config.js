module.exports = {
    //打包空白
    publicPath: './',
    lintOnSave: true,
    //px转rem
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 32,
                        propList: ['*'],
                        selectorBlackList: ['fraud-', 'el-']
                    })
                ]
            }
        }
    }
}