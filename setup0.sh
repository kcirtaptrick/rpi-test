#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
if which node > /dev/null
  then
      echo "node is installed, skipping..."
  else
      cd /home/pi
      wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-armv6l.tar.xz
      tar -xzf node-v10.15.3-linux-armv6l.tar.xz
      cd node-v10.15.3-linux-armv6l
      sudo cp -R * /usr/local/
      cd /home/pi
      rm -rf node-v10.15.3-linux-armv6l*
  fi
#sudo apt install pigpio
cd $DIR
#npm install
if [[ $@ =~ "git-config" ]]
  then
    git config --global user.email "patrick.bohan.wang@gmail.com"
    git config --global user.name "Patrick Wang"
  fi
