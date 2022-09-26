### linux 目录结构

- / 更目录
    - bin 可执行的基本命令
    - sbin 管理员才有的命令
    - boot 启动时候需要加载和使用的文件
    - dev 外部设备链接后，设备对应的文件
    - etc 系统或者程序的配置文件
    - home 每个用户对应一个家目录
    - lib 依赖文件
    - usr 系统和软件默认安装目录
    - var 日志缓存

### date 查看系统时间

### clear 清屏

### pwd 命令所在的当前目录

### ls [path] -[option]

```dotenv
ls              查看当前目录
ls /var         查看指定目录
ls -l           查看详情
ls -a           查看所有文件
```

### mkdir -[option] [name]

```dotenv
mkdir name       当前目录下创建目录
mkdir -p path    指定路径创建目录      
```

### touch [name]

```dotenv
touch name       创建文件
```

### rm -[option] path

```dotenv
rm path          删除文件
rm -r path       删除文件夹
rm -f path       强制删除不询问   
```

### cp -[option] originPath targetPath

```dotenv
cp originPath targetPath        复制文件
cp -r originPath targetPath     复制文件夹
```

### mv origin targetPath

```dotenv
mv orign targetPath             移动文件到文件夹
mv originPath targetPath        修改文件名称
```

### cat/less/tail file 查看文件

```dotenv
cat file           查看文件
less file          分页查看大文件
tail -f file       滚动查看文件后10行
tail -n 20 file    滚动查看文件后20行
```

### find path -name name

```dotenv
find / -name "passwd-*"   查看文件名 passwd 文件
```

### grep text -[option] path

```dotenv
grep 'text' -n path       查看到 text 内容，并显示多少行
grep 'text' -R path        递归查看
```

### ip

```dotenv
ip a 查看网络信息
```

--- 

### ln -[option] 源文件 硬链接文件

```dotenv
ln path path            源文件 硬链接文件
lb -s path path         链接到某个源文件
```

### ps -aux 查看系统进程

### top 实时查看系统进程

### kill id 关闭进程

--- 

### 命令 > file 输出

```dotenv
date > file         将 date 执行后结果输出到 file 中
date >> file        将 date 执行后结果追加到 file 中
```

### 命令 ｜ 命令 管道

```dotenv
cat text.log | grep -n 'test'       将第一个执行结果作为第二个输入
```




