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

#### 全局方法

- beforeAll 在所有 test 之前执行
- beforeEach 在每个 test 之前执行
- afterAll 在所有 test 之后执行
- afterEach 在每一 test 之后执行

#### expect

- 属性
    - not
    - resolves 获取到 promise 的 resolve，如果是 reject ，直接 fail
    - rejects 反之

---

- anything() 除了为 null 或者 undefined
- any(constructor) any(Number) 任何的数字
- [not.]arrayContaining(array) 期望的数组中包含 array 中任意的值
- [not.]objectContaining(object) 期望的对象中包含 object 中任意的值
- assertions(number)  在测试中断言调用了 number 次
- [not.]stringMatching(string | regexp) 判断字符中是否包含 string
- addSnapshotSerializer('my-serializer-module) 添加快照序列化

----

- toBe() 判断值
- toHaveBeenCalled()/toBeCalled() 函数执行过
- toHaveBeenCalledTimes/toBeCalledTimes(number) 函数被执行次数
- toHaveBeenCalledWith/toBeCalledWith(arg1,agr2) 函数返回的结果
- toHaveBeenLastCalledWith/lastCalledWith(arg1,agr2) 最后一次结果
- toHaveBeenNthCalledWith/nthCalledWith(nth,arg1) 第 nth 次被调用的结果
- toHaveReturned/toReturn()
- toHaveReturnedTimes/toReturnTimes(number) 返回的次数
- toHaveReturnedWith/toReturnWith(result) 返回的值
- toHaveNthReturnedWith/nthReturnedWith(nth,result) 第 nth 次返回值
- toHaveLength(number) .length 的长度
- toHaveProperty(keyPath,value) key 是否是某个 value
- toBeFalsy() 值： false, 0, '', null, undefined, and NaN
- toBeTruthy() 除了：false, 0, '', null, undefined, and NaN
- toContain(item) 数组中包含了 item
- toContainEqual(item) 数组中包含了某个对象
- toEqual(value) 等于，可以是 对象/数组。。
- toThrow(error) 抛出错误
- toBeDefined()
- toBeNull()
- toBeNaN()
  -toBeInstanceOf(Class) 是某个类的实例
- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual

#### Mock 函数

```typescript
const mockFn = jest.fn(() => true)
const mockSpyOn = jest.spyOn(object, methodname).mockImplementation(() => true)
```

- getMockName()/mockName(name) 获取设置mockName
- mockClear/mockReset/mockRestore() 清除 mock calls/results/instances
- mockImplementation(implementation) 添加 mock 函数
- mockImplementationOnce(implementation) 添加执行一次的 mock 函数

---

- mockReturnThis() 设置返回值 this
- mockReturnValue/mockReturnValueOnce(value) 设置返回值 value
- mockResolvedValue/mockResolvedValueOnce(value) 返回 value promise
- mockRejectedValue/mockRejectedValueOnce(value)

----

- mock
    - calls 调用次数
    - results 结果数组
    - instances 实例个数

#### jest

- jest.isMockFunction(mockFn) 是否是mock函数
- jest.clearAllMocks()
- jest.resetAllMocks()
- jest.restoreAllMocks()

---

- jest.useFakeTimers() 模拟定时器
- jest.runAllTimers() 执行所有定时器
- jest.runOnlyPendingTimers() 执行待定的定时器
- jest.advanceTimersByTime(number) 提前 number 时间执行
- jest.clearAllTimers()

---
- enableAutomock/disableAutomock 自动设置 module 返回 true
- createMockFromModule(moduleName) 模拟 module ，并修改 module 内属性
- mock(moduleName,factory)
- unmock(moduleName)
- resetModules()
- doMock(moduleName, factory, options) 单独使用



#### configuring
- 











