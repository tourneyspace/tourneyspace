#!/usr/bin/env bash

docker-compose -f backend/docker-compose.yml up -d --build
mvn -f backend/pom.xml clean package -U
mvn -f backend spring-boot:run
npm run start

