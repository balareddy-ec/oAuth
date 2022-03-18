module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.output.filename('js/vueApp.js')
        config.externals(
        )
    },
    devServer: {
        https: true
    },
    css: {
        extract: {
            filename: 'css/vueStyle.css'
        },
        loaderOptions: {
        }
    }
}