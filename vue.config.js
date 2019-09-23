module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:8787/',
              ws: true,
              changeOrigin: true,
              secure: false,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}