
<h1 align="center">ECENTIME | <a href="https://github.com/shenlin192/ecentime/blob/master/docs/demo.gif">示例</a></h1>

<h5 align="center">基于React Native的一分钱购物APP</h5>

<p align="center">
<img src="https://github.com/shenlin192/ecentime/blob/master/docs/demo.gif" style="max-width:100%">
</p>

## 概述

本项目使用react native开发了一个跨Android & iOS平台的应用，应用实现了"一分钱"其中一个页面的显示与交互需求，而数据交互部分则是通过静态Mock数据实现。
由于时间关系，部分细节样式做了细微调整。

## 启动步骤

克隆项目

    git clone https://github.com/shenlin192/ecentime.git

安装依赖

    cd ecentime
    yarn

启动项目

    yarn start

启动成功后浏览器会弹出一个控制面板：

<p align="center">
<img src="https://github.com/shenlin192/ecentime/blob/master/docs/expo.png" style="max-width:50%">
</p>

通过控制面板打开应用的方式有两种：

1. 使用 ios/android 模拟器打开
2. 使用手机打开

若选择方法1，则需要在电脑上先安装 ios/android 模拟器，然后点击控制面板上的"Run on iOS simulator"/"Run on Android emulator"。

若选择方法2，则需要在手机上先安装应用 Expo Client，然后扫描控制面板上的二维码。

## 分析与总结

本节主要介绍项目开发过程中的准备工作和设计过程，其中包括对应用程序文件结构的解析，介绍所使用的核心技术/库以及选择它们的原因，
最后谈一点对react native的开发体会和对这个项目的思考。

### 准备工作

这是我第一次做手机端的开发，所以首先要做的就是学习 react-native 和了解相关的生态系统。
在这段时间里 react-native 官网和 YouTube 的 tutorial 给了我很大的帮助，经过约10个小时的学习，我基本掌握 react-native 的开发理念和方法。
仔细阅读完测试题目并充分了解其需求后，下一件事就是进行技术选型。
为了quick start 一个 react-native 应用程序，毫无疑问，我立即选择 expo 作为开发脚手架。
为了确保代码质量，我选择了react社区中最为流行的 "eslint-airbnb" 作为代码规范。

### 项目设计

本节将主要介绍项目的代码结构设计和重要的技术选型。本次项目的设计与开发大概用时30小时，开发中对不同功能的实现过程也是对生态系统的熟悉过程。

#### 文件结构

本项目使用了[这篇文章](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)所提倡的，以组件为核心的文件组织方式。
主要意思是每个组件都具有其独立工作所需的一切，如其自身的样式，图像，服务，翻译，单元测试等。
若组件间出现可共用的逻辑，则这部分逻辑会被抽象到它们的共同父组件当中。以下是这种文件组织方式的一种示例：

```js
/src
  /componnts
    /Welcome
      /services.js
      /index.js
      /test.spec.js
      /images
          /logo.png
    /Home
      /components
        /Section1
          /index.js
          /test.spec.js
        /Section2
          /index.js
      /index.js
      /services.js
```

与传统的以文件类型最为分类标准的组织方式相比，本项目采用的文件结构能有效提高代码的可扩展性、可读性和可维护性。
以下是传统的文件组织方式示例：

```js
/src
  /components 
    /Welcome
    /Home
    /Section1
    /Section2
  /images
    /logo.png
  /services 
    /welcomeServices.js
    /homeServices.js 
  /specs
    /welcome.spec.js
    /section1.spec.js
    /home.spec.js
  index.js  
```

本项目中也把主要的颜色样式作为变量抽取出来，这有利于日后给用户"选择主题样式"的功能实现。

#### UI库选择

不管是浏览器端还是移动端，UI库都是前端开发不可或缺的一部分。以下是几个社区流行度较高库：

- `react-native-elements`
- `react-base`
- `bit`

这三个库都有不错的文档展示，根据社区流行度的高低我选择了 react-native-elements

#### 路由管理选择

在手机应用种，前端路由是一种十分常见的功能，经过搜索后找到了：

- `react-navigation`
- `react-native-navigation`

这两个库在 github 上都有10000+的星标，因此它们都值得信赖。

最后我选择了 `react-navigation` 因为它的文档更加清晰，具有丰富的示例，而且有着更高的社区流行度。


#### 状态管理选择

本次项目中没有使用像 redux 这样的第三方库作为状态管理工具，因为这次测试中的交互需求比较简单直接，
不存在复杂的组件间通信，因此只要用 react 自带的状态管理方式就足够。

### 更多的思考

#### 优化用户体验

由于时间关系，项目中只实现了测试中提到的需求。可以完善的地方有：增大按钮可点击区域，给加载中的图片加上placeholder，提高应用性能等。

#### 对 React native 的评价

经过这段时间的探索，我发现react-native和它的社区都在飞快发展。
一年前还有不少的bug和坑，如今已经日趋稳定，配合expo作为quick start 的脚手架，开发体验很好。
开发 "一分钱" 这种不是特别重型的APP，性能上不会有问题。再看看使用 react native 开发的[应用列表](https://facebook.github.io/react-native/showcase.html)，
其中不乏 "Facebook"，"Instagram"，"Skype" 等知名应用。

使用 react native 还有一个好处就是可以打破浏览器端和移动端开发人员的界限，使团队交流更加有效。如果后端也使用node, express 和 mongodb等 Javascript 技术栈，
那更是可以降低团队中不同组的技术隔阂，使每一位开发人员都可能成为全栈，也能降低关键技术人员离开的风险。