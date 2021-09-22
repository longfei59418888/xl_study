#### controller

- 管理和运行容器的对象
- pod 通过 controller 来实现运维(伸缩、升级等)
- pod 和 controller 通过 labels/selector 标签来建立关系

#### Deployment 部署

- 创建 yaml
- 部署 应用
- 暴漏端口服务

```
导出 yaml
kubectl create deployment web --image=nginx --dry-run -o yaml > web.yaml 
部署
kubectl apply -f web.yaml
暴漏服务（容器的80端口，集群的8080端口）
kubectl expose deployment web1 --port=8080 --type=NodePort --target-port=80 --name=web1 -o yaml > web-expose.yaml 
```

#### 镜像升级/回滚

```
升级镜像
kubectl set image deployment web ngnix=ngnix:1.15
查看历史版本
kubectl rollout history deployment web
回退上一个版本
kubectl rollout undo deployment web 
回到某一个版本
kubectl rollout undo deployment web to-revision=2
```

#### 弹性伸缩副本

```
kubectl scale deployment web --replicas=5
```