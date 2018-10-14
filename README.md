# webpack-library-example
webpack library example 使用webpack打包自己写的一个JavaScript类库并上传至NPM

可以结合[此文章](https://www.cnblogs.com/weiqinl/p/9786966.html)阅读: https://www.cnblogs.com/weiqinl/p/9786966.html


## 简介

此 library 主要有两个方法（只针对 0-10 之间的数，word 不区分大小写）：  
numToWord(num)  
wordToNum(word)

twoFunction： numToWord && wordToNum。  
两个方法：数字转英文单词，英文单词转数字。只针对 0-10

## 发布到 npm

```
npm login
npm publish

npm version <update_type>
npm run build // 先webpack打包类库，之后再发布
npm publish
```

其中`npm version <update_type>`的选项有如下：
`npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`

## 使用方式

### 浏览器

1. 加载 Using Script Tag

```
<script src="//unpkg.com/lodash"></script>
<script src="//unpkg.com/webpack-library-example"></script>
```

2. 使用 Usage In Web

```
numberWord.VERSION
numberWord.numToWord(6)
numberWord.wordToNum('five')
```

### NODE

1. 安装 Using npm:

```
npm install webpack-library-example --save-dev
```

2. 使用 Usage In Node.js

```
require('lodash')
var webpackNumber =  require('webpack-library-example')

webpackNumber.numToWord(1)
webpackNumber.wordToNum('two')
```
