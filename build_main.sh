#!/bin/sh

cd /home/projects/winc/winc-website

# Builds the `dev` branch 
res=$(git pull origin main | grep Already)

if [[ ${res} =~ 'Already' ]]
then
  echo 'Site already up to date'
else
  npm ci
  npm run build
fi