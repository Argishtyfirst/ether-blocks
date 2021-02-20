#!/bin/sh

# build and start the go application
cd ./server
go build app.go
go run app.go &

cd ../ui && yarn install --ignore-engines
yarn start
