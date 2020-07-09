# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Updates
RUN apt-get update -y && apt-get upgrade -y

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts

# add app
COPY . ./

# start app
CMD ["npm", "start"]
