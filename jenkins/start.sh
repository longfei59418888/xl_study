docker run -d --name jenkins -p 8090:8080 -p 50000:50000 -v ~/jenkins_home:/var/jenkins_home -v /usr/local/bin/docker:/usr/bin/docker jenkins/jenkins
