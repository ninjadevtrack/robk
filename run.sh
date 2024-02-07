#!/bin/bash
DATE=$(date --iso-8601)
sudo rm -rf dist
npm run build && \
sudo rm -rf /var/html/dev.hoxtonventures.com/$DATE && \
sudo mkdir -p /var/html/dev.hoxtonventures.com/$DATE && \
sudo mv /var/html/dev.hoxtonventures.com/public_html/* /var/html/dev.hoxtonventures.com/$DATE && \
sudo cp -R ./dist/robscore-web/* /var/html/dev.hoxtonventures.com/public_html && \
sudo chmod -R 777 /var/html/dev.hoxtonventures.com/public_html
