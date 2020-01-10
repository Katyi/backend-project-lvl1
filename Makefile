# Makefile

Install:
	sudo npm install -g --save-dev @babel/core @babel/cli @babel/node @babel/preset-env

start:
	npx babel-node src/bin/brain-games.js

publish:
	sudo npm publish --dry-run

