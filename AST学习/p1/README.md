
#### AST是什么？
- 抽象语法树：就是将我们的代码文本转为树形的对象
- 主要包含了：节点类型、声明、陈述、描述、位置信息等

#### js 解析器
- Esprima：老牌的 javascript 解析器，最开始的 ESlint 基于 Esprima
- Acorn：babel/Webpack 基于它来完成对 javascript 解析
- UglifyJS：可以解析/压缩/格式化 javascript 代码


#### 规范文档
- JavaScript AST 的规范文档 ：estree规范
- SpiderMonkey 引擎：C语言实现的JavaScript脚本引擎，类似 V8
