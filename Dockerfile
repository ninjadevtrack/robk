,FROM node:14
ENV NPM_CONFIG_LOGLEVEL warn
#ENV NODE_ENV production
ENV NODE_OPTIONS --openssl-legacy-provider
ENV NODE_OPTIONS openssl-legacy-provider

#npm install pm2 -g &&
# Start pm2.json process file
#CMD ["pm2-runtime", "start", "pm2.json"]
WORKDIR /robscore-web

COPY *.json .
COPY src src/
COPY e2e e2e/
RUN mkdir ./dist
# Install app dependencies
#RUN npm --location=global update && npm i -g pm2 && npm ci --only=production --omit=dev
RUN npm i
RUN npx ng build
COPY ./dist/ /robsccore-web/dist
CMD [ "npm", "build" ]

#CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
