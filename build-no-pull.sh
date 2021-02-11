#!/bin/bash
    rm -rf ./dist
#    npm i
    npx ng build --prod
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'main.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'runtime.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name '4.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'polyfills*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'runtime*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name '5.*.js' -delete
#    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +2 -name 'styles.*.css' -delete
    sudo rm  /var/html/dev.hoxtonventures.com/public_html/*
    sudo rm -rf /var/html/dev.hoxtonventures.com/public_html/assets
    cp -R dist/robscore-web/* /var/html/dev.hoxtonventures.com/public_html
