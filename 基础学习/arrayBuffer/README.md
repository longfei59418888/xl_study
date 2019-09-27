
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
     var r = new FileReader();
     r.readAsArrayBuffer(b);
     r.onload = function (){console.log(r.result)}
 }

 // str2ab('hello')

```
