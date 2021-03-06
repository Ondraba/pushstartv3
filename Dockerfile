FROM node:10

MAINTAINER Ales Dostal <a.dostal@apitree.cz>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app
RUN npm install

# Build application, because Next.js have random HASH and BULD_ID
RUN cd /usr/src/app && npm run build

# Add arguments to process.env from docker build --build-arg xx
ARG BUILD_NUM
ENV BUILD_NUM=$BUILD_NUM

ARG BUILD_AUTHOR
ENV BUILD_AUTHOR=$BUILD_AUTHOR

ENV TZ=Europe/Prague

EXPOSE 8080
CMD ["npm", "start"]
