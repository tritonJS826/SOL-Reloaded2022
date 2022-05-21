CURRENT_FILE_FOLDER=$(pwd)

AUTH_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/auth"
STATIC_MICROSERVICE_PATH="$CURRENT_FILE_FOLDER/static"


xterm -hold -e "npm run --prefix $AUTH_MICROSERVICE_PATH start" &
xterm -hold -e "npm run --prefix $STATIC_MICROSERVICE_PATH start" &
