## SpringBootApplication

- ComponentScan 扫描某个包下的组件(主要包含下面注解的组件)
    - 扫描的组件
        - Component
        - Controller 继承Component
        - Service 继承Component
        - Repository 继承Component
- EnableAutoConfiguration
    - Import 手动导入某一个类组件
- SpringBootConfiguration
    - configuration
- Documented
- Inherited
- Target
- Retention

```
@SpringBootApplication
public class MyApplication {

  public static void main(String[] args) {
  SpringApplication.run(MyApplication.class, args);
}
}
```

## ConfigurationProperties

    - 配置bean
    - 获取配置文件

## Validated

    - 校验配置文件的属性是否符合要求

```
@ConfigurationProperties("target.bean")
@Validated 
public class BeanConfig {
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    private String name;
    private Integer age;
}
```

## ConstructorBinding

    - 将配置属性绑定到构造函数中

```
@ConstructorBinding
@ConfigurationProperties("target.bean")
public class BindConfig {

    public String name;
    public Integer age;

    public BindConfig(String name, Integer age) {
        this.name = name;
        this.age = age;
    }
}
```

## Value

    - 将属性直接映射到属性上面

```
@Component
public class ValueConfig {

    public String getName() {
        return name;
    }

    /*
     * name
     * 1、从启动命令上面获取参数 --name=name
     * 2、获取属性 application.properties
     *
     * */
    @Value("${my.test}")
    private String name;
}
```

## Profile

    - 满足环境时候配置类
    - spring.profiles.active=dev,hsqldb

```
@Configuration(proxyBeanMethods = false)
@Profile("production")
public class ProductionConfiguration {

    // ...

}
```
















