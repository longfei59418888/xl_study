
### 配置文件
PM2 允许(empowers)我们管理整个进程的流程  
我们可以通过配置文件来管理PM2的环境变量，日志，其他一些行为  
它对微服务应用特别(particularly)有用  
执行的格式和语言有javascript/json/yaml
```
初始化一个配置文件
pm2 ecosystem

开启整个应用
$ pm2 [start|restart|stop|delete] ecosystem.config.js

开启某一个应用
pm2 start ecosystem.config.js --only worker-app

```

###### json 配置
```
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
  }]
}
```

###### javascript 配置

```
module.exports = {
  apps : [{
    name        : "worker",
    script      : "./worker.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  },{
    name       : "api-app",
    script     : "./api.js",
    instances  : 4,
    exec_mode  : "cluster"
  }]
}
```

######  yaml 配置
```
apps:
  - script   : ./api.js
    name     : 'api-app'
    instances: 4
    exec_mode: cluster
  - script : ./worker.js
    name   : 'worker'
    watch  : true
    env    :
      NODE_ENV: development
    env_production:
      NODE_ENV: production

```

### 通用配置项
```
name：名称
script：脚本文件名，相对路径
cwd：应用程序目录
args：参数
interpreter：解释器
interpreter_args：解释器参数

```

### 高级(advance)属性(feature)
```
instances：要启动的应用实例个数
exec_mode：执行的模式，cluster多核模式，fork单个
watch：目录及其子目录下文件改变，重新启动
ignore_watch：忽略文件
max_memory_restart：最大内存后重启
env：环境变量，可以在应用中得到
env_：重启的时候，注入到启动脚本的时候参数

```

### 日志文件参数
```
log_date_format：日志的时间格式化形式
error_file：错误日志文件路径
out_file：out.log 的路径
combine_logs：是否在日志文件后添加ID
pid_file：进程文件

```

### 控制流程
```
min_uptime：最小启动时间
listen_timeout：监听超出时间，强制重启
kill_timeout：杀死进程超出时间
max_restarts：最大重启数，小于 1 分钟
restart_delay：重启延时时间
autorestart：自动重启
post_update： a Pull/Upgrade 操作后执行
force：多次(serveral)启动同一个脚本,通常(usually)不允许

```

### 部署(deployment)
```
key：SSH key path
user：SSH user
host：SSH host
ssh_options：
ref
repo
path
......

```

### 注意(considerations)
```
环境设置
"env": {
  "NODE_ENV": "development"
},
"env_production" : {
   "NODE_ENV": "production"
}

pm2 start ecosystem.json 的时候 NODE_ENV = development
pm2 start ecosystem.json --env production 的时候 NODE_ENV = production

```

```
监听进程关闭
process.on('SIGINT', function() {
   db.stop(function(err) {
     process.exit(err ? 1 : 0);
   });
});

```

### 部署(deploy)
```
deploy:{
    production:{                         要部署的环境名称
        key："$HOME/.ssh"                服务器key的路径
        user：                           服务器用户名
        host：["212.83.163.1"]           部署的主机
        ref：'origin/master'             git分支
        repo：'git@github.com.git'       git项目地址
        path：'/var/www/prod'            部署的主机上的目录，部署目录
        ssh_options：                    SSH 公钥检查
        pre-setup：'apt-get install git' 安装前执行
        post-setup：'ls'                 安装后，拉取代码等
        pre-deploy：'git fetch'          部署前
        post-deploy：'pm2 startOrRestart app.js' 部署后
        env:{
             "NODE_ENV": "production"
        }
        
    }
}
```
###### 1、本地开发后上传到 git 仓库
###### 2、在本地用PM2进行发动发布，部署
###### 3、服务器端拉去 git 仓库最新代码
###### 4、自动运行项目完成发布



### 在容器中使用PM2 (docker)
需要使用 pm2-runtime
```
CMD ["pm2-runtime", "app.js"]
CMD ["pm2-runtime", "process.yml", "--only", "APP"]

```

### 特殊(specific)环境变量
###### NODE_APP_INSTANCE 
不同的进程会分配不同的 NODE_APP_INSTANCE   
可以检测 process.env.NODE_APP_INSTANCE 值，来判断
```
module.exports = {
  apps : [
      {
        name: "myapp",
        script: "./app.js",
        watch: true,
        instance_var: 'INSTANCE_ID',    设置 NODE_APP_INSTANCE 的值
                                        默认：process.env.INSTANCE_ID 进程实例ID
        increment_var : 'PORT',         增加一个环境变量到每一个实例中，且每一个都不同，
                                        第一个为3000，第二个为3001，以此递增
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        }
      }
  ]
}
```

### 日志管理
PM2可以管理应用的日志
```
modules.exports = [{
  script: 'echo.js',
  error_file: 'err.log',
  out_file: 'out.log',
  log_file: 'combined.log',
  time: true
}]

查看实时日志
pm2 logs -h
pm2 logs                所有
pm2 logs api            某一个
pm2 logs big-api --lines 1000   某一个某一行
pm2 logs --json         json形式
pm2 logs --format       格式化输出
pm2 flush               清空

禁止存储日志
{
  "out_file": "/dev/null",
  "error_file": "/dev/null"
}

```

### PM2.io
PM2有一种简单的形式来监控你的应用的资源使用情况  
可以直接从终端查看你的内存和CPU
```
pm2 monit
```


### 内存阈值(threshold)

### 编程式PM2启动
PM2可以使用编程来启动  
可以直接嵌入(embed)一个进程管理到代码  
生成衍生进程，只要保持这些进程，主程序关闭也会保持
```
var pm2 = require('pm2');

pm2.connect(function(err) {
  if (err) {
    console.error(err);
    process.exit(2);
  }
  
  pm2.start({
    script    : 'app.js',         // Script to be run
    exec_mode : 'cluster',        // Allows your app to be clustered
    instances : 4,                // Optional: Scales your app by 4
    max_memory_restart : '100M'   // Optional: Restarts your app if it reaches 100Mo
  }, function(err, apps) {
    pm2.disconnect();   // Disconnects from PM2
    if (err) throw err
  });
});

```

pm2.connect(errback)：连接或者启动一个PM2的应用进程，即使主程序退出，进程也会保持  
pm2.connect(noDaemonMode, errback)：第一个参数为Ture，则脚本停止，则PM2进程停止，进程停止，脚本也停止  
pm2.start(options, errback)                         参数形式
pm2.start(jsonConfigFile, errback)                  json配置文件路径
pm2.start(script, errback)                          运行脚本路径
pm2.start(script, options, errback)         
pm2.start(script, jsonConfigFile, errback)    
pm2.disconnect()            从PM2断开  
pm2.stop(process, errback)   停止  
....
 

### 进程的信息传递

### 进程(流程)命令操作
```
npm install @pm2/io

var pmx = require('@pm2/io');
// 创建一个操作
pmx.action('hello', function(reply) {
  reply({ answer : 'world' });
});
setInterval(function() {
  // Keep application online
}, 100);

```
###### 接收参数
```
var pmx = require('@pm2/io');
pmx.action('world', function(param, reply) {
  console.log(param);  接收参数
  reply({success : param});
});

pm2 trigger <application-name> <action-name> [parameter]  参数
```

### 开启一个静态服务器
```
pm2 serve <path> <port>
path    服务器目录
port    端口号
name    名称
watch   监听目录

module.exports = {
  script: "serve",
  env: {
    PM2_SERVE_PATH: '.',
    PM2_SERVE_PORT: 8080
  }
}

```

###### SPA单页面应用
自动将所有请求指向 index.html
```
pm2 serve --spa
```

###### 使用密码保护
```
pm2 serve --basic-auth-username <username> --basic-auth-password <password>
```

### 停止监听响应
```
process.on('SIGINT', function() {
   db.stop(function(err) {
     process.exit(err ? 1 : 0);
   });
});

```

### 开启监听/发送
有时候，需要等待其他应用发布(etablishe)链接等  
PM2需要等待，然后再可以发布在线  
需要设置 wait_ready: true 属性  
在程序中执行 process.send('ready') ，告诉就绪  
```
var http = require('http');
var app = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('hey');
})
var listener = app.listen(0, function() {
  console.log('Listening on port ' + listener.address().port);
  // Here we send the ready signal to PM2
  process.send('ready');
});

pm2 start app.js --wait-ready  --listen-timeout 3000
默认等待 3000ms 

```

### 监听信息-关闭信息
当信号不可用时，您的进程将被终止。在这种情况下，您需要监听关闭事件
```
process.on('message', function(msg) {
  if (msg == 'shutdown') {
    console.log('Closing all connections...');
    setTimeout(function() {
      console.log('Finished closing connections');
      process.exit(0);
    }, 1500);
  }
});

```

### 异常错误日志  
``` 
pm2 logs main
```

### 多个PM2在同一个服务器上
通过设置 PM2_HOME 来完成不同的PM2的环境
```
对应环境目录 
$HOME/.pm2
$HOME/.pm3


PM2_HOME='.pm2' pm2 start echo.js --name="echo-node-1"
PM2_HOME='.pm3' pm2 start echo.js --name="echo-node-2"
PM2_HOME='.pm2' pm2 list
PM2_HOME='.pm3' pm2 list

```

### 不开启守护进程
```
 pm2 start app.js --no-daemon
 停止即进程结束
 
 ```
 
 ### 文件位置
 ###### 默认情况下： ~/.pm2/
 























