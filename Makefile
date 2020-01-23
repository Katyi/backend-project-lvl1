# Makefile

Install:
	sudo npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	sudo npm publish --dry-run

lint:
	npx eslint .
