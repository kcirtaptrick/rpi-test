#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd /home/pi
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-armv6l.tar.xz
tar -xzf node-v10.15.3-linux-armv6l.tar.xz
cd node-v10.15.3-linux-armv6l
sudo cp -R * /usr/local/
sudo apt install pigpio
cd $DIR
npm install
