
###  停止和启动的控制/监听
###### 停止(restart/reload/stop)
可以通过拦截(intercept) SIGINT  信号，来组织进程退出
``` 
process.on('SIGINT', function() {
   db.stop(function(err) {
     process.exit(err ? 1 : 0);  主动退出进程
   });
});

```

###### 开始(restart/start)
配置 --wait-ready  
发送 process.send('ready') 就绪  
来实现开始控制  
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

pm2 start app.js --wait-ready --listen-timeout 3000
listen-timeout ready等待超出时间

```

