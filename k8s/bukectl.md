#### 命令

##### 结构

- command: 命令
- type: 资源类型
- name: 应用名称

```
kubeclt [command] [type] [name] [flags]
```

##### 常见命令

- 创建 pod/server 等资源
    - create [type] [name] [option]

```
kubeclt create deployment ngnix --image=ngnix
```

- 创建/导出一个 yaml 文件
    - run [type] [name] [option] --dry-run -o yaml
    - dry-run 试运行
    - o 导出yaml文件名称

```
kubectl run deployment ngnix --image=nginx --dry-run -o yaml
```

- 用 yaml 文件创建资源
    - apply -f [yamlFile]

```
kubectl apply -f yamlFilePath
```

- 向外暴漏资源
    - export [type] [name] [options] ()

```
kubeclt export deployment ngnix --port=80 --type=NodePort
```

- 获取 应用
    - get [type] [name]

```
kubeclt get pod,svc
```

















