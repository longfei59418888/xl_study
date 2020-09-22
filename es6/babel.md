### BABEL

#### @babel/cli
- 命令行
- 用于转换代码

#### @babel/node
- 提供一个支持 es6 的 REPL 环境
- 可以进入 node 的 REPL 环境，支持 es6 

#### @babel/register
- 修改 require 方法
- 为 require 提供 hook，加载前对代码转化

#### @babel/core
- 提供 babel 的 api ，实时转化代码
- transform/transformFile/transformFileSync/transformFromAst
- 提供了方法进行转化

#### @babel/polyfill
- babel 之转化语法，不转化新的全局对象以及对象上面的方法
- babel 对不兼容的方法进行兼容
- 不转换新的 API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象
- babel-plugin-transform-runtime模块，加载了 polyfill


#### @babel/standalone
- 提供浏览器环境
- 页面时候的将 es6 转为 es5


#### traceur
- es5 转为 es6 的工具
- 与 babel 相同


#### 新特性装饰器
- 可选链操作符 ：@babel/plugin-proposal-optional-chaining












