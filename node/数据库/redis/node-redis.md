### node-redis
+ nodejs 的一个完整且功能丰富的 redis 服务端，
+ 支持所有的 redis 命令

#### 事件句柄
+ ready： 一旦建立连接，执行此事件
+ connect： 一旦连接到服务器，触发此事件
+ reconnecting： 重新连接雾浮起触发
+ error： 发生错误的时候触发
+ end： 连接断开的时候触发
+ warning： 警告的时候触发
+ monitor： 监控其他客户端的命令


#### 方法
+ createClient： 连接 redis 服务器
    + host： 主机
    + port： 端口号
    + path： socket 路径
    + url： 服务器地址和端口号
    + string_numbers： 用字符串代替数字
    + return_buffers： 返回buffer
    + password： 密码
+ auth： 认证
+ quit： 退出连接
+ end： 强制退出，不会等待未处理事件
+ multi： 开启一个事务
+ exec： 执行事务
+ watch： 监听某一个key
+ batch： 批量执行
+ script： 执行脚本






