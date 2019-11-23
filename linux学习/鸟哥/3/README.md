### 文件权限和目录设置
- 文件描述
    + 文档操作权限 drw-r--r--
    - 连接数 
    - 文件拥有者
    - 文档所属群
    - 文档大小
    - 时间
    - 名称等
- 文件类型和操作权限
    + 文档类型 ：d目录、-文件、l连接档、b/c装置文件
    + 文件拥有者权限(rwx) : r读取、w写入、x可执行
    + 文件群组用户权限
    + 其他用户
- 链接档连接数
- 文档拥有者
- 文档所属群
- 文档大小
- 日期/名称


#### 修改文件属性和权限
- chgrp：改变文档的所属群组
    + 文件位置：etc/group
    + 命令：chrrp -R(修改子文件) [name] [file]
- chown：改变文档的拥有者
    + 文件位置：etc/passwd
    + 命令：chown -R(修改子文件) [name] [file] 
- chomd：改变文档的操作权限
    + 命令(数组)：chmod [-R] xyz file
    + 权限值：7(读写可操作)、6(读写)、4(读)、0(无权限) [r=4 w=2 x=1]
    + 命令(符号)：chmod [-R] xyz file   
    + 权限值：u=rwx [u-拥有者、g-群组、o-其他、a-全部]
    
    
#### FHS 文件系统标准
- 可分享：可以分享给其他系统挂载使用的目录
    + /usr(unix software resource)：软件放置处/指令命令
    + /opt：第三方协力软件
    + /var(variable)/mail：使用者邮件箱
- 不可分享：计算机本身使用的目录
    + /etc：配置文件
    + /boot：开机与核心文件
    + /var/run[look]：运行中的程序相关
- 不变文件：配置和函数库等
- 可变动：文件运行时程序相关等


#### 根目录(/)
- 根目录跟开机/还原/系统修复等动作有关
- 根目录放在的分区槽越小越小
- 次级目录：
    + /bin：存放单人用户维护使用的命令(root和一般用户都能使用的常规命令)
    + /boot：开机使用的文件和程序
    + /dev：装置和接口设备以目录形式存放在这里(/dev/null、/dev/zero、/dev/tty、/dev/sda)
    + /etc：系统主要配置文件(账号信息、应用配置)
    + /lib：开机和指令的核心程序文件
    + /sbin：开机修复还原等指令
    + /srv(server)：存放网络数据的位置，用户读取
    + /tmp：临时文件目录，应定时清理
    + /home：用户目录，每一个用户都要( ~:来表示 )
    + /root：管理者目录
    
#### /usr (unix software resource)
- 存放可分享、不可变动的文件
- 目录类似(C:\WINDOW、C:\Program File)
- 次级目录：
    + /usr/bin：一般用户所有的指令存放再次，/bin目录下的会以链接的方式链接到这里
    + /usr/lib：同上
    + /usr/sbin：同上
    + /usr/local：自行安装的应用程序
    + /usr/src：源文件
    
#### /var
- 存放时常变动的文件(数据库文件、运行时文件)
- 次级目录：
    + /var/cache：程序运行是暂存文档
    + /var/lib：程序运行时候，存放数据的位置
    + /var/look：程序被使用，锁存
    + /var/log：存放登录文件信息
    + /var/spool：队列
    
    
    

    

#### 目录结构分析
- bin：系统自带命令，一般的用户命令。开关机时候用到
- boot：核心档案，一些开关机设定
- dev：设备目录 dev/sda  dev/null
- etc：系统设置信息，一些启动脚本
- home：用户目录，每一个用户一个目录
- lib：核心库函数等
- sbin：开关机，单人的指令
- srv：网络相关文档
- sys：核心和系统文档
- usr/local：本地系统应用文档命令



### 目录和路径
- 特殊目录：
    + . 当前目录
    + .. 上一层目录
    + - 前一个目录
    + ~ 用户目录
    + ~account 代表 account 用户目录
- 所有的目录下面都会存在两个目录 [.]、[..]
- 相关操作指令：
    + cd 切换目录
    + pwd 当前目录绝对路径
    + mkdir 创建目录
    + rmdir 删除目录
- 创建目录 mkdir 必须得一层一层创建
- mkdir -p /home/bird/test 会逐层创建，如果创建时候存在则报错
- rmdir 只能删除空目录，rmdir -p 可以删除子目录
- 相关管理指令：
    + ls 查看目录文件(a:全部、l:包含属性等、d:只要目录)
    + cp 复制(a:相当于dr、i:覆盖前询问、p:属性权限全复制、r:递归复制)
    + rm 移除(f:强制删除、i:删除前询问、r:递归删除)
    + mv 移动文件/修改名称 (f:存在目标强制覆盖、i:目标存在询问、u:存在更新)
- 相关查看指令：
    + cat/tac/nl 直接查看文件
    + touch 建立空文档、把文档时间修改当前时间
    + file 查看文件类型
- 相关查找指令：
    + which 查找执行档(命令位置)
    + whereis 查找文件目录名，主要查/bin /sbin /share 等
    + find 查找文档：时间相关
        + -a[c|m]time [-+]n：n(n天之前的一天)、+n(n天之前的)、-n(n天内的)，表示在时间内的文档
        + newer file：比file文件之前的文件
    - find 查找文档：用户相关,文件拥有者等
        + uid n：n 为用户id
        + gid n：n 为群组id
        + user name：name 为用户名
        + group name
        + nouser/nogroup
    - find 查找文档：权限和名称
        + name filename：filename 文件名称
        + size [+-]SIZE：文件大小
        + type TYPE：文件类型 d - f
        + perm mode：权限
    - find 查找文档：额外
        + exec 后面接指令接收参数，接受的参数 {}, \; 执行结束符
        + print 打印
        

        
        
    
    
    
    
#### 文件权限 
- umask：预设权限
- chattr：隐藏属性
- lsattr：显示隐藏属性

#### 特殊权限
- SUID：文件的拥有者权限的可执行位为 s 
    + 该文件为二进制文件
    + 该文件拥有者为root
    + 当执行改文件时候，由 root 的权限
- SGID：文件的群组权限的可执行位为 s
- SBIT： 其他权限的可执行位为 t
    + 目录下文件只有自己和root可以删除


    
#### 环境变量 $PATH
- echo 显示和打印的意思
- echo $PATH ，$：表示后面是变量名
- PATH变量：是由很多目录组成，每个目录由[:]隔开
- 设置 PATH: PATH = "${PATH}:/root"，添加 /root 目录到环境变量中
- 



