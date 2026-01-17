#!/bin/bash

cd /home/ubuntu/apps/gotravel
node scripts/fetch-tweets.js
npm run build
