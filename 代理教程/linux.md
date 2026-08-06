# 执行以下命令下载 Clash 二进制文件：
```shell
mkdir ~/clash; cd ~/clash;
wget "https://yj7yr.big-files.make-w0rld-static.club:8000/file/ikuuu-static-release/clash-linux/clash-linux-1.0.1/clash-linux-amd64.gz" -O clash-linux-amd64.gz;
gzip -d clash-linux-amd64.gz;
mv clash-linux-amd64 clash;
chmod +x clash;
```

# 在终端 cd 到 Clash 二进制文件所在的目录，执行 wget -O config.yaml "https://1e3y2.no-mad-world.club/link/uSlqm9Je3gpUToFX?clash=3" 下载 Clash 配置文件
```shell
wget -O config.yaml "https://1e3y2.no-mad-world.club/link/uSlqm9Je3gpUToFX?clash=3
```

# 修改 config.yaml 文件
- 将本地的 config.yaml 上传到 服务器 ./clash/config 下面
- 将本地的 Country.mmdb 上传到 服务器 ./clash 下面


# 修改~/.bashrc
```shell
# ~/.bashrc 修改
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890

source ~/.bashrc
```


# 启动
```shell
./clash -d .
```

# 阿里云上配置端口
- 9090
- 7890、7891

# 做成 systemd 服务（开机自动启动）
```shell
mkdir -p /opt/clash
mv ~/clash/* /opt/clash/

vim /etc/systemd/system/clash.service
# 添加到 /etc/systemd/system/clash.service
[Unit]
Description=Clash Meta Service
After=network.target

[Service]
Type=simple
ExecStart=/opt/clash/clash -d /opt/clash
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target

systemctl daemon-reload

systemctl start clash

systemctl status clash

# 开机启动
systemctl enable clash

# 停止
systemctl stop clash

```

# 优化
```shell
# 修改 /opt/clash/config.yaml
vim /opt/clash/config.yaml

allow-lan: true
bind-address: 0.0.0.0
external-controller: 0.0.0.0:9090

```
