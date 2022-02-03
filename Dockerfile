# pull the official base image
FROM node:17-alpine3.14

# set working directory
WORKDIR /app

# install application dependencies
COPY package*.json tsconfig.json ./

# add app
RUN npm i
COPY . .

EXPOSE 3000
# start app
CMD ["npm", "run", "dev"]