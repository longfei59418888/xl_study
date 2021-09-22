#### configMap 配置文件
- 存储不加密数据到 etcd 中
- 以变量和volume挂在到容器

#### 创建配置文件 configMap
- 创建配置文件 config.json
- 执行创建命令
```
kubectl create configMap test-config --from-file=config.json 
```

#### 使用
```yaml
spec:
  containers:
    - name: ngnix
      image:ngnix
      volumeMounts:
        - name: cm
          mountPath: '/etc/cm'
      volumes:
        - name: cm
          configMap:
            name: test-config
```


#### 以变量形式使用
```yaml
appVersion: v1
kind: configMap
metadata:
  name: cm
data:
  config.username: admin
  config.password: 123456
```

```yaml
spec:
  containers:
    - name: ngnix
      image: ngnix
      env:
        - name: ENV_USERNAME
          valueFrom:
            configMapKeyRef:
              name: cm
              key: config.username
        - name: ENV_PSD
          valueFrom:
            configMapkeyRef:
              name: cm
              key: config.password
```

