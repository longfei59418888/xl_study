
#### 文件系统
- 每一个挂载点都是要给文件系统
- 每个文件包含了inode(节点信息)和data block(数据块)
- 在分区格式化后inode 和 data block 已经分好
- data block 每一个有编号，为了inode 记录
- inode 记录文件属性和数据存在哪些data block 中
- superBlock 记录inode/data block 数量大小等


#### 目录树与文件系统
- 文件系统会分配一个 inode 和最少一个 data block 给目录
- 挂载点是一个目录，该目录是进入文件系统的入口

#### 操作
- df 文件系统的磁盘使用量
    + a 所有文件系统的
    + h 格式化字节 M / G
    + T 列出分区名
- du 评估系统使用量
- ln 实体链接、硬链接、实际链接
    + 不能跨文件系统
    + 不能link 目录
- ln 符号链接
    + 当读取链接数据实际读取链接指向的文件
    + s：默认为 hard link ,加上s 为 system link
    + f：存在链接文件，删除重新创建
    
    
#### 磁盘与文件系统
- 分区创建分区槽  fdisk/gdisk
- 格式化分区槽，创建文件系统 mkfs.xfs
- 校验文件系统  xfs_repair
- 将文件系统挂载到目录上  mount/unmout
- lsblk 列出所有的磁盘
- parted 列出分区表类型和信息




#### 文件压缩
- 文件后缀及其类型：
    + Z compress 程序压缩文件
    + zip 
    + gzip
    + bz2 bzip2 程序
    + xz
    + tar 程序打包数据，未压缩
    + tar[.gz/zip] 程序打包数据，并且压缩
- 压缩文件 gzip
    + 可以创建压缩文件 .gz
    + 可以对 compress/zip/gzip 文件解压
- 打包指令 tar
    + c 建立打包文件
    + z/j/J  打包压缩(gzip/bz1/xz)
    + v 打包过程中显示文件
    + f targetname source 打包的文件,filename 文件名
    + c dirname  解压目录，dirname 目录名
    

#### shell
- alias 设置别名 lm="ls -al"
- type [-tpa] name  是否是内建指令
- 变量：
    + 直接等于赋值 y=1，
    + 不要有空格
    + 不要数字开头
    + $ 在双引号内表示取变量，
    + $ 在单引号内表示字符
    + \ 跳脱字符，将特殊字符[Enter $ \ 空格]，表示为一般字符
    + 命令赋值 version=$(uname -r) echo $version （cd /lib/module/$(uname -r)/kernel）
    + 取出 ${y} $y
    + unset 取消变量
- unset 取消变量
- env 查看环境变量/列出所有环境变量(如：HOME、PATH、MAIL、PWD)
    + HOME 用户目录
    + SHELL shell 脚本使用的是哪一个程序 /bin/bash
    + HISTSIZE 历史命令
    + MAIL 
    + PATH 可执行文件的路径
    + LANG 语言编码相关
    + RANDOM 随机数 0 -32768
- set 观察所有环境变量
- export 将自定义变量设置为全局变量
- locale 显示本地配置
- read 读取来自键盘输入的变量
    + p 可以接提示符
    + t 等待时间
    + read -p 输入 -t 5000 name
- declare 定义类型变量
    + a array 类型
    + i 整数类型
    + x 定义变量时候，为全局变量
    + r 不可更改
    + declare -i name=dsf
- 数组定义  arr[0]=1
- ulimit 限制程序和文件执行使用资源大小
- 删除变量内容 
    + [#] 删除匹配的字符(惰性) ${PATH#/*local/bin:}
    + [##] 删除匹配的字符(贪婪) ${PATH##/*:}
    + % 删除匹配字符(从后面开始、惰性) 
    + %% 删除匹配字符(从后面开始、贪婪)
    + / 匹配替换字符(惰性) ${PATH/*bin/newbin} 将bin替换成newbin 
    + // 匹配替换字符(惰性) ${PATH//*bin/newbin} 将bin替换成newbin 
![](https://study-xiaolong.oss-cn-beijing.aliyuncs.com/study/1571974387.jpg)


#### 路径指令顺序
- 相对/绝对指令操作
- 别名
- 内建指令
- $PATH中指令


#### 通配符和特殊字符
- * 任意个
- ？一个或多个
- []/[^] 括号内和非括号内
- [#] 注释
- \ 转义
- 竖线 管线，分割命令
- ; 连续命令分割
- ~ 用户目录
- $ 取变量
- & 工作控制，指令后台工作
- / 目录
- [>,>>] 数据流重导向：输出导向，分别取代和叠加
- [<,<<] 输入导向
- ' 不能直接用变量
- " 能直接用变量 $
- () 子 shell 开始结束
- {} 命令块

#### 数据流重导向
- 1> 以覆盖的方式将正确的数据写入指定文件
- 1>> 以累加的方式将增却数据写入指定文件
- 2> 错误数据写入
- 2>> 错误数据累积写入
- 2>&1 都写入指定文件


#### 指令执行判断依据
- $? 指令回传值
- cmd1 && cmd2  cmd1正确($?=0),则执行cmd2
- cmd1 || cmd2  cmd2错误($?!=0),则执行cmd2


#### 管线命令
- 主要用于接收上一个命令后的 stdout
- cat 分割字符
    + d 分割的字符
    + f 第几个
    + echo $PATH | cat -d : -f 5 将PATH用:分割，取第5个
- grep [-acinv] '搜索字符串' filename 查询匹配信息
    + a 以 string 形式搜索
    + c 计算次数
    + i 忽略大小写
    + n 行号
    + echo $PATH | grep 
- sort 排序
- tr [-ds] str str 删除或者替换字符
    + d 删除
    + s 取代重复
    + last | tr sr sd
- split 将大文件切成小文件
- sed [-nefr] [动作] 对输入数据进行处理，用于管线
    + 常常用于一整行一整行处理
    + n 安静模式，只有处理的行才会打印
    + e 直接在指令列模式进行 sed 动作编辑
    + f 直接写入文件内
    + i 不做打印
    + 动作 n,m[function] 在n,m行内执行某个动作：
        + a 新增，
        + c 取代，取代 n,m 行内的内容
        + d 删除
        + i 插入
        + p 打印
        + s 取代 sed 's/取代的字符/新的字符/g'
- awk 处理输入数据，主要用于管线
    + 处理一行中的各个段落，段落是空格或者tab隔开
    + 每行的每一个字段都有变量名($1、$2)
    + $0 表示一整行
    + 变量名称：
        + $0/$1/$2 当前这行，和这行的字段
        + NF 字段总数
        + NR 第几行
        + FS 分割符
    + 设置分割符 awk '{FS=":"} $3<10 {print $1+","$2}'
        
        
















