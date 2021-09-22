#### sz / rz

- linux/window 下载/上传文件

#### scp

- 下载到本地 scp username@servername:/path/filename /tmp/local_destination
    - username: 用户名称
    - servername: 当前服务地址
    - /path/filename: 文件路径
    - /tmp/local_destination
- 上传 scp /path/local_filename username@servername:/path

#### EOF >

- 写入文件

```
cat > /target<< EOF
test
EOF
```

```
echo test > /target
```

#### find 
- 查找  find /path -name name
    - path 路径
    - name 名字

