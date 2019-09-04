
### 管理进程状态

PM2是一个应用进程管理工具

~~~
开启一个应用进程
pm2 start app.js --name "my-api"

停止一个应用进程
pm2 stop my-api

启动一个应用进程
pm2 restart my-api

删除应用进程
pm2 delete my-api

通过(via)正则匹配名称
pm2 restart /http-[1,2]/

展示进程列表
pm2 list
pm2 [list|ls|l|status]

展示某一个应用进程详情
pm2 show 0(id)

排序展示所有进程
pm2 list --sort name:desc
pm2 list --sort [name|id|pid|memory|cpu|status|uptime][:asc|desc]

~~~

### 启动其他语言程序
~~~
pm2 start echo.pl --interpreter=perl

pm2 start echo.coffee
pm2 start echo.php
pm2 start echo.py
pm2 start echo.sh
pm2 start echo.rb

{
  ".sh": "bash",
  ".py": "python",
  ".rb": "ruby",
  ".coffee" : "coffee",
  ".php": "php",
  ".pl" : "perl",
  ".js" : "node"
}

二进制文件
pm2 start ./binary-app


{
  "apps" : [{
    "name"       : "bash-worker",
    "script"     : "./a-bash-script",
    "exec_interpreter": "bash",
    "exec_mode"  : "fork_mode"
  }, {
    "name"       : "ruby-worker",
    "script"     : "./some-ruby-script",
    "exec_interpreter": "ruby",
    "exec_mode"  : "fork_mode"
  }]
}

~~~

### 设置最大内存重启
~~~
pm2 start big-array.js --max-memory-restart 20M

{
  "name"   : "max_mem",
  "script" : "big-array.js",
  "max_memory_restart" : "20M"
}

pm2.start({
  name               : "max_mem",
  script             : "big-array.js",
  max_memory_restart : "20M"
}, function(err, proc) {
  // Processing
});


~~~







