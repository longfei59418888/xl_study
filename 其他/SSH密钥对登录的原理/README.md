
### SSH密钥对登录的原理和实践
#### 解释：
###### ssh客户端：用户使用的电脑(服务器等),会有一个 ssh密钥对 的公钥
###### ssh服务器：用于被登录的设备(服务器等),会有一个 ssh密钥对 的私钥
#
####  如何生成密钥对：
###### linux系统：ssh-keygen 生成
###### window系统：keygen.exe xshell 
#
#### ssh两种登录验证的机制：ssh username@111.1.25.12
###### 用户名+ 验证密码 ：需要输入密码
###### 直接密钥验证：不需要输入密码
#
### 设置ssh免密登录
###### 场景：A服务器----登录----B服务器
###### 1、 A服务器生成一对公私钥(ssh-keygen) pub_A,rsa_A
###### 2、将公钥pub_A复制到B服务器的authorized_keys(/root/.ssh)中
###### 3、完成，这个时候A服务器就可以免密登录B服务器
#
### 登录原理
###### 1、A服务器向B服务器请求登录，并且携带上公钥pub_A
###### 2、B服务器得到了A服务器登录请求，并得到公钥pub_A，检查authorized_keys是否有pub_A
###### 3、检查没有直接需要密码
###### 4、检查有公钥pub_A，生成随机字符串S，用公钥pub_A对S进行加密生成M，并返回给A服务器
###### 5、A服务器接收到加密后的M，用私钥rsa_A进行解密还原成A_S，传送给B服务器进行验证
###### 6、B服务器接受到A_S,并和S进行对比，等于即验证成功

### 多个密钥配置
```
Host 别名(alias)   ssh alias 直接登录                 
HostName github.com  主机名称
IdentityFile C:\\Users\\waong\\.ssh\\id_rsa_github 私钥路径
PreferredAuthentications publickey
User username

```


