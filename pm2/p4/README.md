
### Cluster Mode
cluster mode 可以用node应用根据cpus的数量，来应用所有的cpu  
增加了性能和可靠性(reliability)  
更具cpu的数量自动的去衍生子程序来处理应用  

### 使用
``` 
pm2 start app.js -i max
max 是自动获取cpu的数量

module.exports = {
  apps : [{
    script    : "api.js",
    instances : "max",
    exec_mode : "cluster"   开启 cluster 模式
  }]
}


```
