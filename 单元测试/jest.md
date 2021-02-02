### jest
+ 是一个 javascript 的测试框架
+ 可以配合 babel,typescript,node,react,vue,angular 进行测试
+ 生成快照、匹配断言、mock函数/数据

#### 初步介绍
+ 断言 expect/is/test
+ 异步代码测试 assertions 等待
+ setup beforeEach afterEach 设置公共的执行方法
+ mock 函数，监听待用/new ，并且得到返回函数
+ jest 工具
    + jest-changed-files 检查某一个目录的改变文件
    + jest-diff 对比两个任意类型的值
    + jest-docblock 抽取解析头部注释
    + jest-get-type 获取数据类型
    + jest-worker 并行模块，调用一个 node 模块
    + pretty-format 格式化代码
    
#### 快照
+ Snapshot 快照可以对比你的 UI 没有发生任何变化
+ 每次运行测试脚本后，若快照不同，会提醒
+ 可通过更新来更新快照


#### 手动mock数据文件
+ __mock__ 同在在该目录下创建模块实现mock模块
+ jest.mock('fs');来实现模块模块加载

