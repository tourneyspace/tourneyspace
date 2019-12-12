#!/usr/bin/env bash

chmod 777 ./start.sh
docker-compose -f backend/docker-compose.yml up -d --build
./mvnw -f backend/pom.xml clean package -U
./mvnw -f backend spring-boot:run -d
npm run start --prefix fe

