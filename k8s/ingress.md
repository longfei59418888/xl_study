#### ingress
- 统一的入口
- 通过 service 关联到 pod

#### 工作流程
- kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/mandatory.yaml
- 部署 ingress 通过yaml文件部署 （ingress-controller.yaml）
- 配置规则
- 步骤
    - 创建 pod （create deployment web --image=nginx）
    - 暴漏服务 export deployment web --port=80 --target-port=80  --type=nodePort


#### 规则配合
- 可以设置多个域名规则和路径
```yaml
apiVersion: networking.k8s.io/v1bata1
kind: Ingress
metadata:
  name: test-Ingress
spec:
  rules:
    - host: test.host.com
      http:
        paths:
          - path: / 
            backend:
              serviceName: web
              servicePort: 80
          - path: /test
            backend:
              serviceName: web2
              servicePort: 80
``` 
