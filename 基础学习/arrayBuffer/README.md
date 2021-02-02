
#### arrayBuffer
- 用于存储字节数组
- 传入字节数组
- 分配固定内存地址

```js
 const hello = 'hello';
 // ASCII h-104，e-101，l-106，o-111
 const hellos = [104, 101, 108, 106, 111]
 const buffer = new Int8Array(hellos)
 
 // 将buffer转为字符串
 ab2str(buffer)
 function ab2str(u,f) {
     var b = new Blob([u]);
     var r = new FileReader();
     r.readAsDataURL(b, 'utf-8');
     r.onload = function (){
         console.log(r.result)
     }
 }

 
 //字符串转字符串ArrayBuffer
 function str2ab(s,f) {
     var b = new Blob([s],{type:'text/plain'});
     b.arrayBuffer().then((res)=>{
        console.log(res)
     })
     var r = new FileReader();
     r.readAsArrayBuffer(b);
     r.onload = function (){console.log(r.result)}
 }

 // str2ab('hello')

```

#### 实现可写流类
+ _write：实现write
+ _writv：实现数据组write
+ _final：结束
```js
/*
* 实现可写流的 API
* */

const {Writable} = require('stream');

class StringWritable extends Writable {
    constructor(options) {
        super(options);
        this.data = '';
    }

    _write(chunk, encoding, callback) {
        if (encoding === 'buffer') {
            chunk = chunk.toString('utf8')
        }
        this.data += chunk
        callback()
    }
    _final(callback) {
        callback();
    }
}

const w = new StringWritable();
w.write('test')
w.write(Buffer.from('buffer'),'buffer')
w.end();
console.log(w.data)

```

#### 
