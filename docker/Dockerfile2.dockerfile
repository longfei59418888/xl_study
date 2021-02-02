#Dockerfile
FROM node:12.19.0
ENV NODE_ENV=production
RUN npm config set registry http://registry.npm.taobao.org
#RUN npm install pm2 -g
VOLUME ["/user/src/app"]
WORKDIR /user/src/app
RUN npm install
#RUN pm2 install pm2-logrotate
EXPOSE 8008
CMD [ "npm", "run", "start" ]
