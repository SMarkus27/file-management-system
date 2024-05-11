#!/bin/sh
cd file_service && yarn install
yarn prettier:format

cd ..
cd mock && yarn install
yarn prettier:format

