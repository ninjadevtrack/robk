#!/bin/bash
export NODE_OPTIONS=--openssl-legacy-provider
cd /home/robk/robscore-web
mv ./dist ./dist-previous
    npx ng build --configuration production && \
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'main.*.js' -delete && \
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'runtime.*.js' -delete && \
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name '4.*.js' -delete && \
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +2 -name 'styles.*.css' -delete && \
    rm /var/html/dev.hoxtonventures.com/public_html/index.html && \
    rm /var/html/dev.hoxtonventures.com/public_html/*.css && \
    rm /var/html/dev.hoxtonventures.com/public_html/*.js && \
    sudo cp -R dist/robscore-web/* /var/html/dev.hoxtonventures.com/public_html && \
    sudo chmod -R 755 /var/html/dev.hoxtonventures.com/public_html
# rm -rf ./dist
# npm i --force && \
