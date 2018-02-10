FROM node:8.9.4
RUN npm install -g create-react-app \
                   create-react-native-app \
                   react-native-cli
RUN mkdir /app
WORKDIR /app
ADD . /app
CMD npm install && npm start
