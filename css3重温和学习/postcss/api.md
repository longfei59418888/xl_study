## 类型
- AtRule 规则类型
- Declaration  css 声明
- Rule 规则声明

### 公共方法
- after 在后面添加(节点/属性/字符)
- before 在前面添加(节点/属性/字符)
- clone 在前面添加(节点/属性/字符)
- next 返回下一个(节点/属性/字符)
- prev 返回上一个(节点/属性/字符)
- raw 返回前后空格信息
- remove 移除
- replaceWith 移除替换
- toString 对象转为css

- walk/walkAtRules/walkComments/walkDecls/walkRules 遍历 


### AtRule
#### at-root 规则类，用于创建 at-root css
```js
 let media = new AtRule({
 	name: 'media', // 名称
 	params: 'print',  // keyword
 	// parent:root,  // 父元素
 	nodes: [ // 块内节点
 		{
 			selector: 'a',
 			nodes: [
 				{prop: 'color', value: 'black '}
 			]
 		}
 	]
 })
```
```css
@media print {
    a{
        color: black;
    }   
}
```

### Declaration
#### 一个 css 声明，一个属性
##### 属性
- important boolean 用于表示(!important后缀)
- parent 父节点
- prop 属性
- raws DeclarationRaws 空隙
- source 位置信息 用于生产 map 文件
- type 类型 decl
- value 属性的值
- variable boolean  是否是自定义属性或者scss变量

### Rule 
#### 一条规则，声明一个类
##### 属性
- nodes 节点
- selector 类名称
- selectors 类名称数组
- type rule

























