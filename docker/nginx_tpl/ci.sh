#!/bin/sh

GIT_COMMIT=$(git log -n 1 --pretty=format:'%h')


test() {
  echo 'yarn install --prefer-offline --registry=https://registry.npm.taobao.org'
  echo 'yarn test'
}

build() {
  echo 'yarn build'
  docker login -u admin -p root123 http://172.16.173.138:8088
  docker build -t 172.16.173.138:8088/test/cicd:$GIT_COMMIT .
  docker push 172.16.173.138:8088/test/cicd:$GIT_COMMIT
  docker rmi 172.16.173.138:8088/test/cicd:$GIT_COMMIT
}

deploy(){
  cat deploy.yaml | sed 's/\$GIT_COMMIT'"/$GIT_COMMIT/g" | kubectl apply -f -
}


case $1 in
 test )
   $1;;
 build )
   $1;;
 deploy )
   $1 $2 $3;;
 * )
   echo "not support!!! example: go <test|build|deploy>"
   exit 1;;
esac