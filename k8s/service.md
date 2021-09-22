#### Service
- 服务注册中心( pod的ip修改，重新注册)
- 防止 pod 服务失联(每次创建/修改pod的ip地址会改变)
    - 与 pod 服务绑定
    - 发现服务
- 定义 pod 的访问策略( 负载均衡 )


#### pod 和 service 的关系
- 通过 labels 和 selector 建立关系


#### 访问服务过程
- 访问 service 虚拟 ip ( 对外的 )
- 通过虚拟 ip 找到 pod ( service 通过 labels/selector 找到 pod )

#### service 类型
- ClusterIP 集群内部使用
- NodePort  对外暴漏
- LoadBalancer  公有云/对外

```
内部使用
kubectl export deployment web --port=80 --target-port=80 --type=ClusterIp --dry-run -o yaml > svc.yaml
--type=ClusterIp / NodePort / LoadBalancer 默认：ClusterIP
```