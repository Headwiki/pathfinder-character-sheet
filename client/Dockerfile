FROM node:10.14.2-alpine
RUN mkdir -p /srv/app/pathfinder-client
WORKDIR /srv/app/pathfinder-client

COPY package.json /srv/app/pathfinder-client
COPY package-lock.json /srv/app/pathfinder-client

RUN npm install

COPY . /srv/app/pathfinder-client

CMD ["npm", "start"]