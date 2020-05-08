### 进程 Process
+ 计算机资源分配和调度的基本单位
+ 每一个程序开启一个进程，分配独立的资源


#### 线程
+ 计算机运算的最小单位
+ 一个进程可以有多个线程

#### 单线程
+ 一个进程只要一个线程

#### node 的线程和进程
+ 单核计算机：单进程+单线程模式
+ 多核计算机：多进程+单线程模式( 只是为了提高 cpu 的利用率 )


#### 进程和进程的创建
+ process 是一个全局变量，表示主进程
+ process 是 eventEmitter 的实例
+ 通过子进程模块父子进程

##### 进程事件句柄：
+ beforeExit： 表示整个进程结束，与 exit 相近，但是调用 process.exit() 不会触发事件
+ exit： 调用 exit() 或者 结束时候触发
+  IPC 通道
    + disconnect： 使用 IPC 通过得到子进程( cluster 或者 子进程 )，关闭通道时候触发
    + message： 子进程调用了 send() 方法，则会触发
    + send： 向父进程推送消息，message 接受
+ multipleResolves： 只要调用了 Promise[resole/reject] 方法，即会触发
+ rejectionHandled： 每当 Promise 拒绝或者错误的是触发
+ uncaughtException： 异常捕获
+ unhandledRejection： Promise 拒绝或者错误异常捕获
+ 信号事件
    + SIGUSR1： 被 Node.js 保留用于启动调试器。
    + SIGTERM： 
    

##### 进程的属性：
+ arch： 当前 CPU 架构 (arm\arm64\ia32\mips\mipsel\ppc\ppc64\s390\x32\x64) 
+ argv： 命令行参数
+ channel： 如果是子进程 ，表示 IPC 通道引用
+ connected： 如果是子进程，表示是否保持链接
+ debugPort： 调试端口号
+ env： 环境变量
+ execPath： 执行文件路径
+ exitCode： 退出进程的状态码
+ pid： 当前进程的进程号
+ ppid： 当前进程的父进程号
+ release： 返回 node 发布的版本信息




##### 进程的方法：
+ abort： 立即结束进程，生成核心文件
+ chdir： 变更当前工作目录
+ cwd： 返回当前工作目录
+ disconnect： 子进程关闭当前进程
+ exit： 主动退出进程
+ memoryUsage： 进程的内存使用情况
+ nextTick： 下一个时间队列




    
##### 创建子进程方法：
+ node 提供了 child_process 模块来创建子进程
+ spawn[Sync](command[,args][,options])： 返回一个子进程 childProcess 实例
    + command： 要执行的命令
    + args： 参数列表
    + options
        + cmd： 工作目录
        + env： 环境配置
        + detached ： 父进程结束继续运行
        + stdio： 在父进程和子进程之间建立的管道(pipe/ignore/inherit/ipc)
+ exec[Sync](command,options,callback)： 返回一个子进程 childProcess 实例
    + command： 要执行的命令，并且带有参数
    + options
        + cmd： 工作目录
        + env： 环境配置
    + callback
+ execFile[Sync](file[,args][,options][,callback])： 返回一个子进程 childProcess 实例
    + file： 要运行的可执行文件的名称或路径
    + options
    + callback

##### spawn、exec、fork 异同
+ 相同
    + 都是开启一个子进程并执行命令
    + 都有自己的子进程运行环境
    + 都返回一个 childProcess 对象，并且可以得到子进程标准输入\输出\错误流
+ 不同
    + 参数不同
    + 返回数据大小不同(spawn返回数据量无限制，exec 允许返回数据较小)
    + 返回数据类型(spawn 返回流，exec 返回的 buffer)

#### 子进程 ChildProcess 类
+ 通过 spawn\exec\execFile\fork 可以创建子进程对象 childprocess
+ 继承了 eventEmitter 
 
 
###### 事件句柄
+ close/exit： 进程关闭/退出
+ disconnect： 调用 disconnect 方法
+ message： 结束子进程传来的数据


###### 方法
+ send： 给子进程发送信息


##### 提问
+ 什么是进程和线程
+ 什么是孤儿进程
+ 如何解决多进程端口号问题
+ 进程之间如何交换信息
+ 如何实现多线程
+ 如何实现守护进程
+ 如何让 js 变成可以执行文件
+ 








