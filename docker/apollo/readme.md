##### 初始化脚本

```shell

mkdir apollo

cd /apollo
mkdir logs

docker pull apolloconfig/apollo-configservice:2.2.0
docker pull apolloconfig/apollo-adminservice:2.2.0
docker pull apolloconfig/apollo-portal:2.2.0
vim ./docker-compose.yml

docker compose up -d

# apollo:admin

```
