#!/bin/bash
export NODE_OPTIONS=--openssl-legacy-provider
    rm -rf ./dist
    sudo ls ./dist
#    npm i
    npx ng build --prod
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'main.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'runtime.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name '4.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'polyfills*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'runtime*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name '5.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +2 -name 'styles.*.css' -delete
    sudo rm -rf /var/html/dev.hoxtonventures.com/public_html/assets
    sudo rm /var/html/dev.hoxtonventures.com/public_html/*
    cp -R dist/robscore-web/* /var/html/dev.hoxtonventures.com/public_html
