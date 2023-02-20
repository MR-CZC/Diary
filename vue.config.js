const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer : {
    proxy : {
      "/v2/api-docs":{
        target : "http://pve.lycoris.site:9780",
        pathRewriter:{'^/v2/api-docs':''},
        ws : true,
        changeOrigin : true,
      }
    }
  }
})
