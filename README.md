Sample Node App for Docker

Commands to run node docker:

Docker build
#docker-compose build --build-arg HTTP_PROXY=http://proxy-wsa.esl.cisco.com:80 --build-arg HTTPS_PROXY=http://proxy-wsa.esl.cisco.com:80
docker-compose build

Docker run
docker-compose up -d

Docker tag
docker tag -t $(docker images --filter=reference=dockernode_app --format "{{.ID}}") varunkh16/dockernode_app:latest

Docker login
docker login -u varunkh16 -p N1nj@*89

Docker push
docker push varunkh16/dockernode_app