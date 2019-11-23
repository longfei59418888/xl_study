
#### shell script
- 用 shell 命令组成的可执行的脚本
- 执行过程：
    + 自下而上，从左到右
    + 忽略多个空格，忽略空行
    + Enter 开始
    + [#] 为批注
- 编写 shell
    + 第一行 申明使用的执行器 #!/bin/bash
    + 内容
    + 退出 exit 0
- script 脚本完成任务后，不会回传到父程序中，不同的 bash
- source 执行脚本后，是在同一个 bash 中执行
- test 用来判断的(比较大小、文件比较、文件权限、字符比较等)
- [] 判断符号
    + [ "$PATH" == "TEST" ]
    + 空格隔开
    + 变量在双引号内
    + 常数在单引号
- 默认参数
    + $0\$1\$2 命令和各个参数
    + $# 参数的个数
    + $@ 
- 判断语句
```
if[];then
elif[];then
else
fi
```
- 不定循环
```
while[]
do
done
```
-  固定循环
```
for var in com1 con2
do 
done

for((i=1;i<4;i=i+1))
do 
done
```





















    
