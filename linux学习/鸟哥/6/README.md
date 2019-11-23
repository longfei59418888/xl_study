
#### 账号管理和权限
- 每个使用者最少两个ID，UID,GID
- 登录过程
    + 查找 /etc/passwd 是否有账号
    + 将账户的 UID\GID\家目录\shell 一起读出来
    + 密码校验 /etc/shadow 校验 UID 和 账号的密码是否正确
    + 进入 shell 界面
- /etc/passwd 文件结构 (保存用户信息)
    + 每行代表一个账户
    + 有很多系统自带账户
    + 每行使用[:]隔开
        + 账号
        + 密码
        + UID (0:管理员，1-999:保留ID，1000-60000:账户ID)
        + GID
        + 用户信息说明
        + 家目录 默认的 /home/youIdName
        + shell 
- /etc/shadow 文件结构 (保存用户账号密码信息)
    + 账户密码和UID、账户的关联
    + 每行使用[:]隔开
        + 账户名称
        + 密码
        + 最近更新时间
        + 其他
- /etc/group 文件格式 (保存群组信息)
    + 群组文件保存
    + 以[:]隔开
        + 群组名
        + 群组密码
        + GID
        + 群组支持的账号名称
- 初始群组 用户保存在 /etc/passwd 中的群组
- 有效群组
    + groups 查看自己属于哪些群组
    + 第一个群组为有效群组
    + 创建文件时候，该文件属于有效群组
    + newgrp 切换有效群组


#### 账号管理
- useradd [-u UID] [-G GID] [-G 次要群组] [-d 家目录] [-s shell] username 创建一个账号
    + e 账号失效日期
    + f 密码是否失效
    + 创建过程
        + 在 /etc/passwd 中建立账号相关数据
        + 在 /etc/shadow 创建账号，但无密码
        + 在 /etc/group 加入账号群组信息
        + 在 /home 创建以账号为名称的目录，权限 700
- passwd [--stdin]  [username]
    + stdin 透传要给管线数据作为密码
    + l 锁住，密码失效
    + u 解锁
    + n/x/w/i 可修改时间/需改动时间/警告时间/失效时间
- chage 列出账号密码相关数据信息
- usermod 修改账号信息(UID、GID、家目录等)
- userdel 删除用户相关信息
- id 查询用户的 UID、GID
- groupadd [-g GID] [-r] groupName
    + r 建立关联群组
- groupmod 修改群组相关信息
- groupdel 删除
- gpasswd groupName 群组管理员功能
    + 给 groupName 设置密码
    + gpasswd [-ad] userName groupName
        + a 将 userName 加入 groupName 群组
        + d 将 userName 从 groupName 移除
- su/sudo 切换账号

#### 查看
- who 查看用户信息，在线用户信息列表
- lastlog 登录信息
- write otherUser pts/2[终端号]  给在线的 otherUser 传递信息
- mail 寄出邮件
    +  mail -s "mailTitle" username@locahost
    + username 某个一个主机上面的用户
    + localhost 主机名称
    + 如果给本机，则不需要localhost
    + . 内容结束符
    
#### 例行性工作排程
- 一次的工作排程
    + 开启服务 atd  systemctl restart atd
    + at [-mldv] TIME
        + 指令 at 命令，进入 at 终端，输入指令
        + 在某一给时间点执行，执行指令
    + atq 查询指令，列出所有工作排程
    + atrm number 删除工作排程
- 循环执行工作排程
    + crontab [-u username] 
        
    



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
