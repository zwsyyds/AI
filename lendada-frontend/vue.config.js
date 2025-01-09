const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
//eslint导致build 项目错误
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production'
}
