### submodule

1. 新项目(A)添加 submodule(B)
    - git submodule add gitLabBPath targetPath
        - gitLabPath 子项目 gitlab 路径
        - targetPath 添加到项目B的路径
    - Demo

```dotenv
git submodule add https://github.com/chaconinc/DbConnector
```

2. 自动添加配置文件 .gitmodules

```dotenv
//指定子模块的名字
[submodule "DbConnector"]
	//自定子模块的存放路径，这里是同级目录下的DbConnector目录
	path = DbConnector
	//子模块的clone地址
	url = https://github.com/chaconinc/DbConnector
```

3. 拉取主项目 git clone

- 未使用 --recurse-submodules
    - git clone https://github.com/chaconinc/main
    - git submodule init 初始化配置文件 .gitmodules
    - git submodule update 更新子模块文件
    - git submodule update --remote
    - git submodule update --init 【上面两步结合】
- 使用 --recurse-submodules
    - git clone --recurse-submodules https://github.com/chaconinc/Main

4. 拉取更新子项目（随时）
    - git submodule update --init --recursive
    - git submodule foreach [git pull、git checkout master]
        - 子包循环执行 git pull
        - 子包循环执行 git checkout master
    - 推送子包:  git push --recurse-submodules=check
    - 异常处理
        - git submodule sync 同步子包url(异常处理)
        - git submodule update --init --recursive
5. 删除模块

```dotenv
rm -rf 子模块目录 删除子模块目录及源码
vi .gitmodules 删除项目目录下.gitmodules文件中子模块相关条目
vi .git/config 删除配置项中子模块相关条目
rm -rf .git/module/* 删除模块下的子模块目录，每个子模块对应一个目录，注意只删除对应的模块目录即可

git rm --cached 子模块名称  清除git缓存
```

---

```dotenv
rm .gitmodules
rm -rf .git/*
```
