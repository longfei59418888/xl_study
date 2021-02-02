### Object

#### 方法
+ assign：合并对象，浅扩展
```js
if (typeof Object.assign !== "function") {
    Object.defineProperty(Object, 'assign', {
        value: function assign(target, args) {
            if (target === null || target === undefined) {
                throw new TypeError(`target can't be null or undefined`);
                return
            }
            target = Object(target)
            args = args.slice(1)
            args.forEach(item => {
                if(item !== null && item !== undefined){
                    for (var i in item) {
                        target[i] = item[i]
                    }
                }

            })
            return target 
        },
    })
}

```

+ create ：创建对象
```js
Object.create(prototype)
```

+ defineProperty：精确的添加和修改对象某一个属性或者方法
```js
Object.defineProperty(Object, 'info', {
    value: 'value', // 对应的值
    configurable: true, // 为 true 的时候，才可以修改描述符，才允许修改和删除属性
    enumerable: false, // 为false的时候，不可以枚举(for/in、Object.keys不会返回该属性)
    writable:true, // 为 true 的时候，才能修改 value 值
    get(){}, // 访问这个属性的时候，调用该函数
    set(v) {} // 该属性被修改的时候，调用该函数
})
```

+ entries ：返回对象键值对数组
```js
const test = Object.entries({test:1,test2:2}) // return [[test,1],[test2,2]]
for([attr,value] of test){}

```

+ is ：判断对象是否为同一个值，比较栈内存保存的地址
+ keys ： 返回对象的所有可枚举键值
+ values ：返回对象所有的可枚举的value

#### 属性
+ prototype ：原型属性，对象设置 prototype 用于继承
    + __proto__ ：用于查看原型，形成原型链
    + constructor ：构造函数，指向创建对象的构造函数
    
#### prototype 属性上面的方法
+ __defineGetter__ ：定义对象上面某一个属性的 get 函数，获取的时候调用
+ __defineSetter__ ：定义对象上面某一给属性的 set 函数，设置的时候调用
+ hasOwnProperty ：检查对象是否包含某一个属性
+ isPrototypeOf ：检测某一个对象是否在另一个对象原型上面


### Function

#### 属性
+ arguments 函数被调用时候传入参数
    + length 参数的个数
    + callee 当前函数
+ name ： 函数名称
+ length ：需要输入的参数

#### 方法
+ apply ：输入数组
+ call ：传入参数
+ bind
