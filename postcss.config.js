module.exports = {
  plugins: {
    autoprefixer: {
    },
    "postcss-pxtorem": {
      "rootValue": 37.5, // 基准值, 例如设计稿元素宽度为375px, 转换为rem为375/37.5 = 10rem
      "propList": ["*"],
      "mediaQuery": false, // （布尔值）允许在媒体查询中转换px
      "minPixelValue": 1.01 //设置要替换的最小像素值(0px会被转rem)。 默认 0
    }
  }
}
