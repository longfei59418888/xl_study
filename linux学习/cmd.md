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

- 查找 find /path -name name
    - path 路径
    - name 名字

### sed

- sed  [选项]   '操作' 参数
    - 选项 -e : 表示用指定命令或者脚本来处理输入的文本文件
    - 选项 -f : 表示用指定的脚本文件来处理输入的文件文件
    - 选项 -i ：直接编辑文本文件
    - 操作 a : 添加
    - 操作 c : 替换
    - 操作 d : 删除
    - 操作 i : 插入
    - 操作 p : 打印
    - 操作 s : 替换
    - 操作 y : 转换

```dotenv
sed -n '3,5p' ens33  #输出3-5行内容
sed -n '3p;5p' ens33  #输出第三和第五行
sed -n 'p;n'  ens33  #输出所有奇数行
sed -n 'n;p'  ens33  #输出所有偶数行 
sed -n '1,5{p;n}'  ens33  #输出1-5行的奇数行
sed -n '1,5{1~2p}' ens33   #输出1-5的奇数行
sed -n  '7,${n;p}'  ens33  #输出7行以后的偶数行
sed -n '3,+5p' ens33  #从第3行开始，连续进行输出即输出3-8行的内容
sed -n '/the/p' test.txt  #输出包含the的行 
sed -n '4,/the/p' test.txt #输出从第四行开始包含the的行
sed -n '/the/=' test.txt  #输出包含the的行所在的行号，用（=）来输出行号
sed -n '/^PI/p' test.txt  #输出PI开头的行
sed -n '/[0-9]$/p' test.txt  #输出以数字0-9为结尾的行
sed -n '/\<wood\>/p' test.txt  #输出包含单词wood的行，\<    \>代表单词边界
```

```dotenv
nl test.txt | sed '3d' #删除第三行
nl test.txt | sed '3,5d' #删除3-5行内容
```

```dotenv
sed 's/the/THE' test.txt #将每行中的第一个the替换为THE
sed ‘s/l/L/2’ #将每行的第二个l替换为L
sed 's/l/L/g' test.txt  #将文件中所有的l都替换为L
sed 's/o/ /g' test.txt    #将所有的o都替换为空字符
sed 's/^/#/' test.txt  #将所有行前面都加个#
sed '/the/s/^/#/' test.txt    #将包含the的行前面加个#
```

### grep

- grep [-acinv] [--color=auto] '搜寻字符串' filename
    - a:将 binary 文件以 text 文件的方式搜寻数据
    - c:计算找到 '搜寻字符串' 的次数
    - i:忽略大小写的不同，所以大小写视为相同
    - n:顺便输出行号

### awk

- awk [-F  field-separator]  'commands' input-file(s)
    - -F 与分隔符，每一行会被分割，其中默认为空格
    - commands 是真正awk命令

```dotenv
awk -F: '{print $1}' /etc/passwd #用:分割,打印第一个$1
awk -v host=$HOSTNAME "BEGIN{print host}" #-v：自定义变量
awk -F: '$7 ~ /^\/bin/{print $0}' /etc/passwd #判断第7列是否以/bin开头，如果是打印该列
  print：直接输出 awk -F: '{print $1 ":" $2}' /etc/passwd
  printf：格式化输出（printf是一个函数，需要用到()）
awk -F: '{printf(hello %s:%s\n),$1,$2}'
注意：printf需要手动增加\n来换行。使用%s来格式化，printf()外加入要替换的变量
---
seq 10 |awk '{if($0%2==0){print $0"是双数"}else{print $0"是单数"}}' #例如：产生10个数seq 10，通过if语句判断是单数还是双数
```

```dotenv
git diff release/v59-uat --full-index | sed -n '/^index /p' | sed 's/\./ /g' | awk '{print $3}'


git log 4240d3b9..6fb710f4  --pretty=format:'%s'  | awk '!a[$1]++' 
```
