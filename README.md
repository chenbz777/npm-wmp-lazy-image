## 简介

**wmp-lazy-image** 是一款微信小程序图片懒加载**自定义组件**，当图片过多时，只加载**可视区域**的图片，避免过多占用网络请求，使用**wmp-lazy-image** 可让您更专注于业务逻辑。

<br />

## 使用

### 初始化项目

```bash
npm init
```



### 安装

```bash
npm i @chenbz/wmp-lazy-image
```



### 构建npm

**工具** => **构建npm**



### 使用

`/pages/home/index.json`

```json
{
    "usingComponents": {
        "wmp-watermark": "@chenbz/wmp-lazy-image"
    }
}
```



`/pages/home/index.wxml`

```html
<view>
  <wmp-lazy-image src="https://s1.ax1x.com/2022/05/08/OlHYdA.png"></wmp-lazy-image>
</view>
```

<br />

## 属性

| 属性名       | 类型   | 默认值                                    | 描述              |
| ------------ | ------ | ----------------------------------------- | ----------------- |
| src          | String | https://s1.ax1x.com/2022/05/08/OlbiFI.gif | 图片url（必传！） |
| lazyImageUrl | String | https://s1.ax1x.com/2022/05/08/OlbiFI.gif | "加载中"图片url   |
| alt          | String |                                           | alt               |
| mode         | String | widthFix                                  | 模式              |

