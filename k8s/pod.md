#### Pod

- 最小的部署单元(资源单元)
- 可以包含多个容器
- 是短暂的

#### 特性

- 共享网络
- 共享存储 (数据卷 volumn)
    - 持久化(日志、业务数据)

#### pod 健康检查

- livennessprobe (存活检查)
    - 检查 pod 异常，杀死容器，根据容器 pod 的 restartPolicy 操作


#### pod 创建过程
- master node
  - 通过 apiserver，并把 pod 相关信息存储到 etcd
  - 进入 scheduler，通过 apiserver 去 etcd 读取配置，通过算法调度到某个 node
- node 
  - 进入 kebulet，通过 apiserver 去 etcd 读取配置，分配给 node
  - 通过配置通过 docker 创建容器，并通过 apiserver 返回存储到 etcd
  
#### pod 调度分配的属性
- 限制
- 污点/污点容忍：可以使node不被选择

