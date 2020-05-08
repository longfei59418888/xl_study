### Set 和 Map 数据结构

#### 总结
- 用 Set 代替数组
- 用 Map 代替对象
- 保存基础数据时候可以使用

### Set
- 类似与数组，不可以重复
- 创建 new Set() ,接收 array 。返回一个 set 实例
- set 和 array 互转
    + new Set([1,2,3])
    + [...new Set([1,2,3])] -> [1,2,3]
    + 数组去重 [...new Set(array)]
- set 实例方法：
    + add 添加项目
    + has 是否存在某一个项目
    + delete 删除某一个
    + clear 清除所有值
    + keys 所有的键名
    + values 所有的值
    + forEach 类似数组遍历    
- set 实例属性：
    + size 长度
- WeakSet
    + 没有长度，不能遍历
    + 只能保存对象


#### Map
- 类似与对象，不过属性名不局限字符串
- new Map([[attr,value]])
- map 的方法：
    + set 添加属性
    + get 获取属性值
    + has 
    + delete
    + clear
- map 的属性：
    + size 长度
    

#### Iterator 和 for...of 循环
- 对象有 Symbol.iterator 属性既可以被遍历(for...of )
- Symbol.iterator 为数据提供函数，并且实现 next 函数
- 默认具备 Symbol.iterator 属性
    + Array
    + Map
    + Set
    + String
    + TypedArray
    + 函数的 arguments 对象
    + NodeList 对象
```
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};

const test = {
    index: 5,
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index > 0) {
                    this.index--
                    return {value: this.index + 1, done: false}
                } else {
                    return {value: this.index, done: true}
                }
            }
        }
    }
}
for (let item of test) {
    console.log(item)  // 5,4,3,2,1
}
```


#### Generator 函数的语法
- 返回一个遍历器对象
- 带有 iterator 接口的对象
- 方法：
    next : 执行下一个状态，参数重置当前位置返回的值
    return : 结束遍历
    throw ：抛出异常
- yield* : 在一个 Generator 函数中 调用另一个 Generator 函数
- 状态机实现 this.isTrue = !this.isTrue
- 基于 Generator 函数的异步函数
```
const init = (function () {
    let id = 0
    let map = new Map();

    function* get(url, id) {
        const result = yield (function () {
            setTimeout(() => {
                const target = map.get(id)
                target.int.next(`${url},结果！`)
            }, 1500)
        })()
        const target = map.get(id)
        target.fun(result)
        map.delete(id)
    }

    return function (url) {
        id += 1
        const int = get(url, id)
        const target = {int}
        map.set(id, target)
        int.next()
        return (fun) => {
            target.fun = fun
        }
    }

})()
```

#### async
```
async function test() {
    const start = new Date().getTime()
    // 同时执行
    const one = init(5000)
    const two = init(2000)
    await one
    await two
    console.log(new Date().getTime() - start)
}

async function test() {
    const start = new Date().getTime()
    // 顺序执行
    await init(5000)
    await init(2000)
    console.log(new Date().getTime() - start)
}

```
    
### 编码风格
- 常量命名
```
const [a,b,c] = [1,2,3]

const a = 1
const b = 2
const c = 3

```
- 









