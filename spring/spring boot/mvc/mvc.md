#### MVC

- Model: 模型
    - javaBean
        - 实体类 JavaBean
        - 业务类，Dao、Service
- View：视图层，模版
- controller：控制层，servlet

#### 步骤

- 创建工程 maven
- 引入依赖
- 创建 web.xml
    - 注册 servlet
    - 注册 filter
    - 注册 listener

```xml
<!-- web.xml 配置servlet和路由-->
<web-app>
    <servlet>
        <servlet-name>SpringTest</servlet-name>
        <serlet-class>...DispatcherServlet</serlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springMvc.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>SpringTest</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```

```xml
<!--添加过滤器-->
<web-app> 
    <filter-name></filter-name>
    <filter-class>FileClass</filter-class>
</web-app>
```

- 创建 controller
- 配置 thymeleaf 模版引擎

```xml
<!-- springMvc.xml -->
<beans>
    <context:component-scan base-package="class"></context:component-scan>
    <!--    引用一个bean-->
    <bean id="name" class="thymeleafClass">
        <!--        bean的属性-->
        <property name="name" value="value"/>
        <property name="name2" value="value"/>
        <!--        属性的值为一个bean-->
        <property name="name3">
            <bean class="className">
                <property name="name" value="value"></property>
            </bean>
        </property>
    </bean>
</beans>
```

- 创建一个请求mapping方法，返回视图名称



