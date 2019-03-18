#!/bin/bash
sudo rm -rf dist
ng build --prod
sudo cp -R ./dist/robscore-web/* /var/www/dev.hoxtonventures.com/public_html
sudo chmod -R 777 /var/www/dev.hoxtonventures.com/public_html
