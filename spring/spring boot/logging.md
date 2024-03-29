## 介绍
- spring boot 自带 commons logging
- 只需要在添加配置文件 logback-spring.xml
```yaml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

    <!--
       说明：
       1、日志级别及文件
           日志记录采用分级记录，级别与日志文件名相对应，不同级别的日志信息记录到不同的日志文件中
           例如：error级别记录到{log.context.name}_error.log（该文件为当前记录的日志文件），而{log.context.name}__error.log为归档日志，
           日志文件按日期记录，每天的日志不再拆分
           例如log-level-2013-12-21.log
           其它级别的日志也是如此。
       2、文件路径
           统一输出到/home/logs
       3、Appender
           FILEERROR对应error级别，文件名以{log.context.name}_xxx_error.log形式命名
           FILEWARN对应warn级别，文件名以{log.context.name}_xxx_error.log形式命名
           FILEINFO对应info级别，文件名以{log.context.name}_xxx_error.log形式命名
           FILEDEBUG对应debug级别，文件名以{log.context.name}_xxx_error.log形式命名
           默认输出级别为debug，不明确指定情况下文件名以{log.context.name}.log形式命名
           stdout将日志信息输出到控制上，为方便开发测试使用
    -->

    <!--定义日志文件的存储地址 勿在 LogBack 的配置中使用相对路径-->
    <property name="log.directory" value="/home/logs/" />
    <!--项目名称，也是存储日志的具体目录-->
    <property name="log.context.name" value="logback-demo" />
    <!--日志的字符编码-->
    <property name="log.charset" value="UTF-8" />
    <!--历史记录最大保存天数-->
    <property name="log.maxHistory" value="30" />
    <!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度%msg：日志消息，%n是换行符-->
    <property name="log.pattern" value="%d{yyyy-MM-dd HH:mm:ss.SSS}$$[%thread]$$%-5level{}$$shop-crm-service$$%msg%n" />
    <!--日志Error级别名称配置-->
    <property name="log.error.log.level" value="ERROR" />
    <!--异步写日志的队列大小配置，默认为256-->
    <property name="log.async.queue.size" value="1024" />

    <!--配置日志的上下文名称-->
    <contextName>${log.context.name}</contextName>

    <!--对应spring环境变量为local的日志配置，只做控制台输出配置-->
    <springProfile name="local">
        <!--控制台日志输出配置，可以匹配色彩和高亮-->
        <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %highlight(%-5level) %cyan(%logger{50}) - %yellow([%file:%line]) - %msg%n</pattern>
                <!--<pattern>${log.pattern}</pattern>-->
                <charset>${log.charset}</charset>
            </encoder>
        </appender>
    </springProfile>
    <!--对应spring环境变量为production,pre的日志配置-->
    <springProfile name="pre,production">
        <!-- 服务器上使用的appender start -->
        <!-- 默认的file appender，按天切分日志 -->
        <appender name="ROLLING_FILE_DEFAULT" class="ch.qos.logback.core.rolling.RollingFileAppender">
            <file>${log.directory}${log.context.name}/${HOSTNAME}-%d{yyyyMMdd}.log</file>
            <append>true</append>
            <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
                <fileNamePattern>${log.directory}${log.context.name}/${HOSTNAME}.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
                <maxHistory>${log.maxHistory}</maxHistory>
                <totalSizeCap>30gb</totalSizeCap>
                <timeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                    <maxFileSize>2gb</maxFileSize>
                </timeBasedFileNamingAndTriggeringPolicy>
            </rollingPolicy>
            <encoder>
                <pattern>${log.pattern}</pattern>
                <charset>${log.charset}</charset>
            </encoder>
        </appender>

        <!-- 错误日志，按天切分 -->
        <appender name="ROLLING_FILE_ERROR" class="ch.qos.logback.core.rolling.RollingFileAppender">
            <filter class="ch.qos.logback.classic.filter.LevelFilter">
                <level>${log.error.log.level}</level>
                <onMatch>ACCEPT</onMatch>
                <onMismatch>DENY</onMismatch>
            </filter>
            <file>${log.directory}${log.context.name}/${HOSTNAME}_error-%d{yyyyMMdd}.log</file>
            <!-- 日志追加配置 -->
            <append>true</append>
            <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
                <fileNamePattern>${log.directory}${log.context.name}/${HOSTNAME}_error.%d{yyyy-MM-dd}.log</fileNamePattern>
                <maxHistory>${log.maxHistory}</maxHistory>
            </rollingPolicy>
            <!-- 此日志文件只记录error级别的 -->
            <encoder>
                <pattern>${log.pattern}</pattern>
                <charset>${log.charset}</charset>
            </encoder>
        </appender>

        <!-- 异步写日志文件的配置 -->
        <appender name ="ASYNC_FILE" class= "ch.qos.logback.classic.AsyncAppender">
            <!-- 当队列达到配置队列大小的80%时，不将日志丢失 如果为-1 则超过队列80%的日志丢掉-->
            <discardingThreshold >0</discardingThreshold>
            <queueSize>${log.async.queue.size}</queueSize>
            <appender-ref ref = "ROLLING_FILE_DEFAULT"/>
        </appender>
    </springProfile>

    <!-- rabbitmq的日志专属配置 -->
<!--    <logger name = "org.springframework.amqp.rabbit.listener.BlockingQueueConsumer" level ="WARN"/>-->
    <!-- zookeeper 的日志专属配置 -->
<!--    <logger name = "org.apache.zookeeper.ClientCnxn" level ="WARN"/>-->
    <!-- 多数据源 的日志专属配置 -->
<!--    <logger name = "com.hualala.commons.multidatasource.curator.CuratorClient" level ="WARN"/>-->
<!--    <logger name = "com.hualala.commons.multidatasource.datasource.DynamicDataSource" level ="WARN"/>-->
    <!-- 设置falcon监控的日志输出格式 -->
<!--    <logger name = "com.hualala.infrastructure.falcon.FalconMonitor" level ="WARN"/>-->

    <!--mybatis的日志专属配置 -->
    <logger name="jdbc.sqltiming" level="debug"/>
    <logger name="com.ibatis" level="debug" />
    <logger name="com.ibatis.common.jdbc.SimpleDataSource" level="debug" />
    <logger name="com.ibatis.common.jdbc.ScriptRunner" level="debug" />
    <logger name="com.ibatis.sqlmap.engine.impl.SqlMapClientDelegate" level="debug" />
    <logger name="java.sql.Connection" level="debug" />
    <logger name="java.sql.Statement" level="debug" />
    <logger name="java.sql.PreparedStatement" level="debug" />
    <logger name="java.sql.ResultSet" level="debug" />

    <logger name="org.springframework" level="WARN" />

    <!-- 当前项目 的不同环境的日志级别配置 -->
    <logger name="com.hualala" level="debug" additivity="false">
        <springProfile name="local">
            <appender-ref ref="STDOUT" />
        </springProfile>

        <springProfile name="mu,dohko,pre">
            <appender-ref ref="ASYNC_FILE" />
            <appender-ref ref="ROLLING_FILE_ERROR" />
        </springProfile>

        <springProfile name="production">
            <appender-ref ref="ASYNC_FILE" />
            <appender-ref ref="ROLLING_FILE_ERROR" />
        </springProfile>
    </logger>

    <root>
        <springProfile name="local">
            <level value="info"/>
            <appender-ref ref="STDOUT" />
        </springProfile>

        <!-- dohko环境用来测试，日志级别尽量可以设置的低，便于定位问题 -->
        <springProfile name="mu,dohko,pre">
            <level value="info"/>

            <appender-ref ref="ASYNC_FILE" />
            <appender-ref ref="ROLLING_FILE_ERROR" />
        </springProfile>

        <!-- pre环境用来做压测，避免对测试环境的日志服务产生压力，日志级别设置为warn -->
        <springProfile name="pre">
            <level value="warn"/>

            <appender-ref ref="ASYNC_FILE" />
            <appender-ref ref="ROLLING_FILE_ERROR" />
        </springProfile>

        <!-- production为生产环境，需要记录能够定位问题或流程流转的日志，但是非必要的日志无须记录 -->
        <springProfile name="production">
            <level value="info"/>
            <appender-ref ref="ASYNC_FILE" />
            <appender-ref ref="ROLLING_FILE_ERROR" />
        </springProfile>
    </root>
</configuration>
```
