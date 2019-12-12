#!/usr/bin/env bash

docker-compose -f backend/docker-compose.yml up -d --build
./mvnw -f backend/pom.xml clean package -U
./mvnw -f backend spring-boot:run -d
npm run start

