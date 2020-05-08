#### Sequelize
- 一个基于 node 的 ORM 对象映射模型库，支持 Postgres, MySQL, MariaDB, SQLite and Microsoft SQL 等服务器。
- 支持稳定的 事务，关系，延时加载，复制读取等

#### 类 
+ Sequelize： 创建一个 Sequelize 实例
+ Model： 模型类，
+ Sequelize.Utils： 工具类
+ Validator： 验证类
+ Transaction： 事务类
+ Instance： 实例类
+ Error： 错误类

#### Sequelize 实例方法
+ getDialect： 获取当前方言
+ getQueryInterface： 获取一个 QueryInterface 实例
+ define(name,attr,option)： 定义模型，返回一个 Model 实例
    + name： 模型名称
    + attr
        + type： 类型 (DataType 或者字符串)
        + allowNull： 是否允许为空
        + defaultValue： 默认值
        + unique：唯一标志
        + primaryKey： 是否为主键
        + field：字段名称(与属性名称一一对应)
        + autoIncrement： 自增
        + comment： 描述信息
        + references： 引用对象( 引用其他表 )
            + model： 表的模型
            + key： 表外键的引用
            + onUpdate： 关联新增的时候操作
            + onDelete： 关联删除时候的操作
        + get： 访问器
        + set： 设置器
    + validate： 验证器
    + option：
        + defaultScope： 默认搜索范围
        + scopes： 范围
        + omitNull： 是否忽略空值
        + timestamps： 自动添加修改和创建时间
        + paranoid： 逻辑删除
        + name： 名称
            + singular
            + pluralize
        + indexes： 建立索引
            + name： 名称
            + type： 类型
            + method
            + unique： 是否唯一
            + fields：字段
+ model： 获取某一个模型
+ isDefined： 是否定义模型
+ import： 导入模型
+ query(sql,option)： 执行查询语句
    + raw： 为 true,不会实例化结果
    + transaction： 查询的指定事务
    + type： 返回结果是否格式化
+ set： 设置变量
+ escape： 编码
+ createSchema： 创建数据库
+ showAllSchemas： 展示所有数据库
+ dropSchema： 删除数据库
+ dropAllSchemas
+ sync： 同步模型到数据库
    + force： 强制执行
+ drop： 删除表
+ authenticate： 验证是否连接
+ fn： 创建数据库函数对象
+ 



#### 外键
+ 表 A 属于 表 B
+ 表 A 的一个属性 B_ID 即是表 A 的外键







  
        
        
        
        
        
        
        
        