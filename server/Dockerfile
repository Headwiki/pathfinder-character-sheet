FROM node:10.14.2-alpine
RUN mkdir -p /srv/app/pathfinder-server
WORKDIR /srv/app/pathfinder-server

COPY package.json /srv/app/pathfinder-server
COPY package-lock.json /srv/app/pathfinder-server

RUN npm install

COPY . /srv/app/pathfinder-server

CMD ["npm", "start"]