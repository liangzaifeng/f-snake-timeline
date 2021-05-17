module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: { // 这一步配置将css强行内联，否则发布后的组件在使用时不会携带css
    extract: false
  }
}