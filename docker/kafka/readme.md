```shell


mkdir kafka
cd kafka
mkdir data
chown 1001:1001 kafka/data
docker pull bitnami/kafka:3.6.2
vim docker-compose.yml
# KAFKA_CFG_ADVERTISED_LISTENERS，注意将 192.168.9.81 换成实际的服务器 IP 
# external: true， 服务器已经创建 Docker 网络 app-tier 时，创建服务时会报错，可以启用这个参数。

cd /kafka
docker compose up -d

```

```shell
mkdir -p /kafka-ui
cd /kafka-ui
docker pull provectuslabs/kafka-ui:v0.7.2
vim kafka/docker-compose.yml

cd /kafka-ui
docker compose up -d
```
