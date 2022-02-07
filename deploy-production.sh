#!/bin/bash

git pull
docker-compose -f docker-compose.production.yml up --detach --build unblock-workflow
