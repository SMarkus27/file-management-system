#!/bin/sh
cd file_service/backend && yarn install
cd ..
cd file_service/frontend && yarn install
cd ..
cd mock && yarn install
