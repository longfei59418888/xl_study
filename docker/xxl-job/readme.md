### 新建表 sql 语句在项目里 /xxl-job/doc/db/tables_xxl_job.sql 在目标数据库执行语句建库、建表

```shell
docker pull longfei59418/xxl-job-admin-arm:2.4.0

vim docker-compose.yml
# xxl.job.accessToken= 是和客户端通信的token, 非空的时候启用, 如果不为空, 则客户端也需要填相同的token
docker compose up -d
```
