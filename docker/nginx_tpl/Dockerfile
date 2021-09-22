FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html

# 保护进程，禁止容器推出
ENTRYPOINT [ "/usr/sbin/nginx", "-g", "daemon off;" ]