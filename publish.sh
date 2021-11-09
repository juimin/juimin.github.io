#! /usr/bin/env bash

# Run the build
npm run build

cp -r ./dist /tmp/.personalsite

# Switch to hosting branch
git checkout -B gh-pages
git branch --set-upstream-to=origin/gh-pages
git pull

# Remove everything
rm -rf ./*

cp /tmp/.personalsite/* ./

git add .
git commit -m "publishing command"
git push

# Switch back to the master branch
git checkout -B master

# Clean up
rm -r /tmp/.personalsite