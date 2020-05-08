### 流 Stream
+ Stream 继承 EventEmitter

#### 流的类型
+ 可写入数据的流： fs.createWriteStream()
+ 可读取数据的流： fs.createReadStream()
+ 可读可取数据的流： net.Socket


#### 可写入流
+ 客户端 http 请求
+ 服务器的 http 响应
+ fs 的写入流
+ zlib 流
+ crypto 流
+ tcp socket 流
+ 子进程 stdin
+ process.stdout \ process.stderr
+ 这些写入流都实现了 stream.Writeable 类定义的接口

#### stream.Writeable 类

##### 事件
+ close：关闭的时候触发
+ drain：可再次写入的时候触发(调用 stream.write 返回false,如果触发drain事件表面可以再次写入
+ error：写入时候发生错误时候触发
+ finish：调用 stream.end() 时候触发
+ pipe：调用 pipe 时候触发
+ unpipe：移除 管道流的可写数据

#### 方法
+ cork：将数据缓冲到内存中，直到调用了 uncork\end 方法，缓存数据才会输出
+ end(chunk,encoding,bak)：没有要写入的数据。
+ setDefaultEncoding：设置默认编码
+ write(chunk,encoding,bak)：写入数据

```js

/*
* 创建一个可写流
* fs 的写入流继承 stream.Writeable 类
* */
const writer = fs.createWriteStream('./2.txt');

/*
* 缓冲区满了，释放后重新可以写入事件
* */
writer.on('drain', () => {
    console.log('重新可以写入事件');
})
/*
* 结束事件
* */
writer.on('finish', () => {
    console.log('所有写入完成');
})
/*
* 发生错误事件
* */
writer.on('error', () => {
    console.log('所有写入完成');
})
/*
* 管道写入事件
* 当可读流调用了 pipe(writer) 时候触发事件，并传入 可读流对象
* 当可读流调用了 unpipe(writer) 时候触发事件，并传入 可读流对象
* */
writer.on('pipe', () => {
    console.log('所有写入完成');
})
writer.on('unpipe', () => {
    console.log('所有写入完成');
})

/*
* 设置编码
* */
writer.setDefaultEncoding('utf8')
/*
* 写入数据到流
* */
writer.write(',test','utf8',()=>{})
/*
* 写入完毕，写入目的文件
* */
writer.end('end!')
```

### 可读流

#### 模式
+ 流动模式：自动读取
+ 暂停模式：必须显式调用 stream.read() 读取数据块
+ 暂停模式切换流动模式：
    + 添加 'data' 事件句柄
    + 调用了 stream.resume() 方法
    + 调用了 stream.pipe() 方法发送给可写流
+ 流动模式切换暂停模式：
    + 调用 stream.pause()
    + 调用 stream.unpipe() 移除管道目标

#### 事件
+ data：切换为流动模式，接受数据
+ end：数据接受完毕
+ error：发生错误

#### 方法
+ read(size)：暂停模式读取
+ pipe(dest)：管道形式输入给写入流
+ setEncoding()：设置编码

```js
/*
* 创建一个可读流
* fs 的写入流继承 stream.Writeable 类
* */
const writer = fs.createReadStream('./2.txt');
writer.setEncoding('utf8')
writer.on('data',(res)=>{
    console.log(res)
})
```











