#! /usr/bin/env bash

# Run the build
npm run build

git checkout -B gh-pages
# Remove everything

# Switch back to the master branch
# git checkout -B master