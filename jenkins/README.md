# 防火墙添加端口
```dotenv
systemctl status firewalld
# 查看端口
firewall-cmd --permanent --zone=public --list-ports
# 添加端口
firewall-cmd --permanent --zone=public --add-port=2375/tcp
# 关闭
systemctl stop firewalld
```
