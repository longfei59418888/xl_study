#### secret

- 加密数据存储在etcd中
- 让 pod 容器以挂在 volume 方式访问

#### 创建 secret

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mySecret
type: Opaque
data:
  username: admin
  password: 123456
```

#### 以 环境变量 形式使用 secret

```yaml
spec:
  containers:
    - name: ngnix
      image: ngnix
      env:
        - name: ENV_USERNAME
          valueFrom:
            secretKeyRef:
              name: mySecrt
              key: username
        - name: ENV_PSD
          valueFrom:
            secretKeyFrom:
              name: mySecret
              key: password
```

#### 以 数据卷 的形式使用 secret

```yaml
spec:
  containers:
    - name: ngnix
      image: ngnix
      volumeMount:
        - name: foo
          mountPath: '/etc/foo'
          readOnly: true
      volumes:
        - name: foo
          secret:
            secretName: mySecret
```













