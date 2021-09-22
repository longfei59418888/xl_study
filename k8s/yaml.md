#### yaml

- k8s 对资源管理和资源对象编排部署都可以用 yaml 文件来实现
- 通过缩进表示层级关系
- 使用空格缩进

#### 格式

- 是 json 的超集
- 数据类型
    - Maps 键值对（ ':' ：表示Map）
    - Lists 列表（ '-' ：表示集合）
    - 基础类型
- 文档分隔符 （'---'）
    - 分割多个声明

##### 配置

- apiVersion: api版本
- kind: 资源类型
- metadata: 元数据(属性)
    - name: 资源名称(同一个namespace只能有一个)
    - namespace: 命名空间
    - labels: 自定义标签（数组）
        -  : 属性和名称
- spec: 资源详情
    - containers: 容器列表(数组)
        - name: 容器名称
        - image: 容器镜像
        - imagePullPolicy: 获取镜像策略(Always|IfnotPresent|Never)
        - command: 容器命令，默认使用打包的时候命令(数组)
        - args: 命令参数（数组）
        - workingDir: 工作目录
        - volumeMounts: 挂在容器内部存储卷（数组）
            - name: 引用pod定义的共享卷的名称
            - mountPath: 存储卷在容器内的绝对路径
        - ports: 暴漏的端口列表(数组)
            - name: 端口名称
            - containerPort: 容器需要监听的端口
            - hostPort: 容器在主机需要监听的端口号，默认与cotainer相同
            - protocol: 协议，默认tcp
        - env: 环境(数组)
            - name: 键
            - value: 值
        - resources: 资源和请求设置
            - limits/request: 资源/请求限制
                - cpu
                - memory
        - livenessprobe: 健康检查设置(exec|httpGet|tcpSocket)
        - restartPolicy: 重启策略(always|never|onFailure)
        - nodeSelector: 选择 node
        - volumes: 在该pod上面定义存储卷
            - name: 名称
            - hostPath: 主机目录
                - path: 目录
            - secret
                - secretName: 名称
                - items:
                    - key
                    - name
            - configMap
                - name: 名称
                - items
                    - keys

```yaml
appVersion: v1
kind: Pod
meteata:
    name: test
    namespace: test
    labels:
        - name:string
spec:
    containers
        - name: ngnix
          image: ngnix
          imagePullPolicy: [Always | Never | IfNotPresent]
          command: ['/bin/sh','cat test.txt']
          args: 
          env: # env 通过环境变量获取
            - name: key
              value: test
            - name: key2
              value: test2
          prots:
            - name: http
              containerPort: 8080 # 对service 暴漏端口
          valumeMounts:
            - name: log-cache
              mount: /tmp/log
            - name: sdb
              mountPath: /data/list # 跟随容器销毁
            - name:
           
          

```
















