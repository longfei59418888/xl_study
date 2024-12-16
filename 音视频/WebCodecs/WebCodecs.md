# WebCodecs API

> WebCodecs API 给开发可以操作视频的单个帧和音频块，这对于媒体处理是非常有用的，比如音视频编辑和视频会议

### 概念和用法
> 很多API内部包含了媒体编解码器，比如： Web Audio API、WebRTC API，但是这些API不允许开发着单独的的处理视频的单个帧和音视频块。  
> 开发者通常使用 WebAssembly 来绕开限制控制音视频的编解码  
> WebCodecs API 使用异步的处理模式，每一个编解码器的实例都包含了一个内部独立的处理队列，通过 configure、encode、decode、flush 方法将控制消息推送到处理队列中。  
> 通过 reset、close 方法同步的中断 pending 的任务和清除处理队列，reset 之后还可以调用 configure ，而 close 之后不允许  
> flush 当所有的任务都加入处理队列之后，调用 flush 告诉已经完成，下一帧需要是关键帧  

### 接口

#### AudioDecoder

> 用于解码音频的块  

##### 构造函数
```typescript
AudioDecoder() // 继承 EventTarget
```

##### 属性【EventTarget】
- decodeQueueSize：队列里面的请求个数
- state：解码器的状态【是否可用】

##### 事件
- dequeue：队列的请求数量减少

##### 方法
- static isConfigSupported()：是否支持AudioDecoderConfig
- configure(options)：配置
  - options codec 容器的格式
  - guideide 采样率-采样的频率
  - numberOfChannels 声道
  - description
- decode(chunk:EncodedAudioChunk): 将音频chunk入处理队列
  ```typescript
  interface Option {
    type:'key'|'delta' // 确定是否依赖其他帧解码
    timestamp:number // 音频的时间戳
    duration: number // 持续时间
    data: ArrayBuffer | TypedArray | DataView
    transfer: []
  }
  new EncodedAudioChunk(Option)
  interface EncodedAudioChunk {
    type:'key'|'delta' // 确定是否依赖其他帧解码
    timestamp:number // 音频的时间戳
    duration: number // 持续时间
    byteLength: number
  }
  ```
- flush(): 所有的数据入队列之后调用
- reset(): 重置，包含了configure
- close(): 关闭


