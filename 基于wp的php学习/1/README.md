
#### wp-blog-header.php 初始化  
#### wp-load.php   
+ 定义-ABSPATH : 更目录 /  
+ 加载 wp-config.php  
#### wp-setting.php     
+ 设置变量  
+ 引入各个模块  
#### wp-includes/load.php  函数库
+ 函数库：  
    + wp_get_server_protocol：获取协议
    + wp_unregister_GLOBALS：将 register_globals 置为 off(不将$_GET['username''] 转为 $username)
    + wp_fix_server_vars 注册$PHP_SELF 当前脚本文件
    + wp_check_php_mysql_versions 检测php和mysql版本及其配置
    + wp_favicon_request 图标请求
    + wp_maintenance 升级位置
    + timer_start 开始时间
    + timer_stop 开始到调用的时间
    + wp_debug_mode  debug 模式设置
    + require_wp_db     加载 db 模块
    + wp_set_wpdb_vars  设置 db 请求前缀等
    + wp_using_ext_object_cache  缓存设置
    + 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
