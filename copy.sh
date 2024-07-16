#!/bin/bash
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'main.*.js' -delete
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name 'runtime.*.js' -delete
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +5 -name '.*.js' -delete
    find "/var/html/dev.hoxtonventures.com/public_html" -type f -mtime +2 -name 'styles.*.css' -delete
    cp -R dist/robscore-web/* /var/html/dev.hoxtonventures.com/public_html
