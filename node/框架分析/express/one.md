
### 网络模块 ( Net )

#### 网络模型
+ 七层网络模型(osi)：应用层、会话层、表现层、传输层、网络层、数据链路层、物理层
+ tcp/ip 模型：应用层、传输层、网络层、数据链路层、物理层
+ 应用层：主要是供开发者或者用户使用的应用程序和功能( http/ftp )
+ 传输层：主要是把上层的数据封装成报文段或者数据报
+ 网络层: 将上面的封装成分组和包
+ 数据链路：将上面数据封装成帧，传输
+ 物理层：以电信号传输


#### Net 模块
+ 用于创建 TCP 连接、IPC 通道、客户端请求连接
+ TCP 模型
    + c -- syn = 1,req = x -- s
    + s -- syn = 1,seq = y,ack = x+1 -- c
    + c -- ack = y+1,seq = z -- c

#### 分类
+ net.Server 类 ：用于创建 socket 服务器
+ net.Socket 类 : 用于客户端发起 socket 请求


#### net.Server 类
+ 创建 socket 服务方法
    + new net.Server()
    + net.createServer()
+ 事件句柄
    + close：server 关闭时候触发
    + connection：有新的连接进入的时候触发，返回socket
    + error：发生错误时候触发
    + listening：调用了 listen 方法后触发
+ 属性
    + listening：是否正在监听
+ 方法 
    + address：返回地址信息{ port: 12346, family: 'IPv4', address: '127.0.0.1' }
    + close：关闭的时候调用
    + getConnections：获取当前连接数
    + listen：监听端口或者IPC

#### net.Socket 类
+ 创建 socket 对象
    + net.connect()
    + new net.Socket()
+ 事件句柄
    + close
    + connect：连接成功后触发
    + data：接受到数据后触发
    + drain：重新清空缓存后触发
    + end：结束
    + ready：connect 后触发
+ 属性    
    + localAddress：客户端地址
    + localPort：本地端口号
    + pending：是否连接
    + remoteAddress：远程地址
    + remotePort：远程端口号
+ 方法
    + address：地址信息
    + connect：连接掉某一个socket
    + end：结束
    + pause：暂停数据写入
    + resume：回复数据写入
    + write：写入数据
    
















