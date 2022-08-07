#!/bin/bash

CURRENT_FILE_FOLDER="$(pwd -P)"

AUTH_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/back/auth"
QUIZ_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/back/quiz"
TEMPLATE_EXAMPLE_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/back/templateExample"

# install package manager
npm --location=global i pnpm

# intall, test and build all back-end projects
cd $AUTH_MICROSERVICE_PATH
pnpm install
pnpm run test
pnpm run build
cd $QUIZ_MICROSERVICE_PATH
pnpm install
pnpm run test
pnpm run build
cd $TEMPLATE_EXAMPLE_MICROSERVICE_PATH
pnpm install
pnpm run test
pnpm run build

#install and build all front-end projects

