#!/bin/bash
    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'main.*.js' -delete
    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'runtime.*.js' -delete
    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name '4.*.js' -delete
    find "/var/www/dev.hoxtonventures.com/public_html" -type f -mtime +2 -name 'styles.*.css' -delete
    cp -R dist/robscore-web/* /var/www/dev.hoxtonventures.com/public_html
