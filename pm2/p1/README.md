
### 介绍
pm2可以帮我们管理后端(deamon)node应用程序  
它提供了简单直接(straightforword)的命令，可通过(via)npm安装

### 安装
~~~
npm install -g pm2
yarn global add pm2
~~~

### 开启应用
最简单的开启，守护(deamonize)和监视(monitor)应用
~~~
pm2 start app.js
~~~

### 命令参数
~~~
name : app名称  
watch/ignore-watch : 监控某一个文件，改变后重启应用   
max-memory-restart : 设置最大内存阈值(threshold)，重新启动应用  
log : 错误日志文件  
-- arg1 arg2 arg3 : 脚本参数  
restart-delay : 延时重新启动  
time : 设置日志带有时间  
no-autorestart ：不重新启动APP  
cron ：制定强制重启app  
no-daemon ：附加日志到应用程序
~~~

### 进程管理
~~~
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
~~~

### 查看状态/日志/指标
我们可以查看我们应用的状态/指标/日志，还可以在线查看仪表板(dashboard)
~~~
查看所有应用状态
$ pm2 [list|ls|status]

查看实时日志
$ pm2 logs

挖掘(dig)旧日志
$ pm2 logs --lines 200

开启仪表，恰好(fits)直接展示再你的终端(terminal)
$ pm2 monit

~~~

### 集群模式
多核模式
~~~
$ pm2 start app.js -i max
~~~

### 配置文件
用于管理多个应用程序
~~~
创建配置文件
$ pm2 ecosystem

module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
     name: 'worker',
     script: 'worker.js'
  }]
}

$ pm2 start process.yml

~~~

### 安装启动脚本
在服务器启动或者重启的是，重新启动app是很重要的(critical)  
运行下面命令可以生成启动脚本
~~~
安装启动脚本
$ pm2 startup

冻结启动
$ pm2 save

~~~

### 备忘录(cheatsheet)
下面的命令很有价值(worth)
~~~
开启一起带名字进程
pm2 start app.js --name my-api 

集群(多核利用) 根据cpus 数量
pm2 start app.js -i 0       

pm2 scale app +3       加三个workers
pm2 scale app 2        开启两个workers

pm2 list    展示左右应用状态
pm2 jlist/prettylist   将所有的应用列表生成一个json
pm2 describe 0  展示某一个进程的详情
pm2 monit  监视所有的进程

pm2 logs [--raw]  查看日志
pm2 flush  清空日志
pm2 reloadLogs  重新加载日志

pm2 stop all   停止所有进程
pm2 restart all  重启所有进程

pm2 stop id   停止某一个进程
pm2 restart id  重启某一个进程

pm2 delete id/all  删除进程

~~~












