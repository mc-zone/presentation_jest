#!/usr/bin/env sh

# abort on errors
set -e

cd ./dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f origin master:gh-pages
cd -
