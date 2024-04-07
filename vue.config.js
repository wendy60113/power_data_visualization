module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/": {
        target: "https://service.taipower.com.tw",
        ws: false, // 如果要代理 websockets
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  },
};
