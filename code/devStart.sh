#!/bin/bash

CURRENT_FILE_FOLDER=$(pwd)

AUTH_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/back/auth"
QUIZ_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/back/quiz"
TEMPLATE_EXAMPLE_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/back/templateExample"


xterm -hold -e "npm run --prefix $AUTH_MICROSERVICE_PATH start" &
xterm -hold -e "npm run --prefix $QUIZ_MICROSERVICE_PATH start" &
xterm -hold -e "npm run --prefix $TEMPLATE_EXAMPLE_MICROSERVICE_PATH start" &
