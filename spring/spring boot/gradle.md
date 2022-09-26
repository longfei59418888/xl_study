### 插件:plugins

- 引用插件

```
plugins {
	id 'org.springframework.boot' version '2.7.0'
	# 版本
	id 'org.springframework.boot' version '2.7.0' apply false
}
---
apply plugin: 'java'
apply plugin: 'io.spring.dependency-management'
```

### 依赖:dependencies

```yaml
dependencies {
  implementation('org.springframework.boot:spring-boot-starter-web')
  implementation('org.springframework.boot:spring-boot-starter-data-jpa')
}
```
#### 依赖管理:dependencyManagement
- 引用其他的 bom
```yaml
apply plugin: 'io.spring.dependency-management'

dependencyManagement {
	imports {
		mavenBom org.springframework.boot.gradle.plugin.SpringBootPlugin.BOM_COORDINATES
	}
}
```
