### 前言
+ node 模块机制采用的 Commonjs 规范
+ 模块是 node 应用程序的基本组成部分，文件和模块一一对应
+ node 通过 module.exports 对外输出变量或者接口，通过 require 加载其他模块
+ node 模块按顺序依次加载，并且只有第一次加载模块时候运行，然后存在缓存中

#### 分类
+ 核心模块： 包含在 node 源码中，被编译成二进制文件，也叫 native 模块，如 http/fs/net
+ C/C++ 模块： 也叫 build-in 模块，供 native 模块调用
+ 其他模块： 自己开发的、第三方的、C/C++扩展模块

#### 加载机制
+ 路径分析
+ 文件定位
+ 加载封装
+ 编译执行
+ 缓存

##### 路径分析
+ 自动添加后缀名： 依次顺序.js 、.node 、.json
+ 核心模块(http/fs)： 加载速度快,仅次于缓存
+ .node： C/C++ 模块
+ 自定义模块： 通过相对路径/绝对路径找到文件
+ 包文件(目录做为模块)： 通过包里面的 package.json 中的 main 找到入口文件


##### 文件定位
+ 1、是否已在缓存中： require.cache 
+ 2、是否是核心模块： 从 node/lib 中加载核心模块
+ 3、包文件/对应路径文件： 路径和 package.json 中的 main 确定文件

##### 加载封装
+ 加载模块
+ 封装模块）
```js
    (function(exports, require, module, __filename, __dirname) {
    // 模块的代码
    });
```

##### 编译执行
+ 执行封装好的代码
+ module.exports 导出变量和接口

##### 缓存
+ 创建缓存 ID
+ 将得到模块缓存到 require.cache 中
+ 清除缓存
```js
delete require.cache[id]
```

##### 模块循环加载
+ a.js
```js
console.log('a 开始');
exports.done = false;
const b = require('./b.js');
console.log('在 a 中，b.done = %j', b.done);
exports.done = true;
console.log('a 结束');
```
+ b.js
```js
console.log('b 开始');
exports.done = false;
const a = require('./a.js');
console.log('在 b 中，a.done = %j', a.done);
exports.done = true;
console.log('b 结束');
```
+ main.js
```js
console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);
```
+ 模块依次加载
    + 加载 a.js 运行到 exports.done = false
    + 在 a.js 中加载 b.js 
    + b.js 运行到 exports.done = false
    + 在 b.js 中加载 a.js（加载部分 a.js 的 exports） 得到 a.done = false
    + 继续 b.js 中的运行，得到 b.js 的 exports 变量
    + 再继续运行 main.js
+ 在循环加载中，不能使用未到出的属性(exports可以导出部分变量和接口)


##### require
+ require.cache： 被引用的模块回缓存到这个对象里面
+ require.main： 表示 node 脚本的入口文件模块
+ require.resolve： 将路径解析成绝对路径
+ require.resolve.paths： 其中包含解析 request 过程中被查询的路径


##### module
+ module.children： 被该模块引用的模块对象
+ module.exports： 用于导出没模块的变量和接口
+ exports： module.exports 的引用，如果重新赋值责指向位置发生变化
+ module.filename： 当前目录的文件名称
+ module.id： 当前目录的标识符
+ module.loaded： 模块是否加载完成
+ module.parent： 依赖的模块对象
+ module.paths： 模块的搜索路径

#### Module
+ 为 Module 实例提供通用方法





