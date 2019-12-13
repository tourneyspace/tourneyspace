#!/usr/bin/env bash

chmod 777 start.sh
chmod 777 ./start.sh
docker-compose -f backend/docker-compose.yml up -d --build
mvn -f backend/pom.xml clean package -U
mvn -f backend spring-boot:run
npm run start --prefix fe


