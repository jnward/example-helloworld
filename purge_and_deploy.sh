#!/bin/bash

rm -r node_modules dist package-lock.json
npm install
npm run build:program-rust
solana program deploy dist/program/helloworld.so
npm run init
rm dist/program/helloworld-keypair.json