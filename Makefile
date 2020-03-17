# Makefile

Install:
	sudo npm install

start:
	npx babel-node src/bin/brain-games.js

build:
	rm -rf dist
	npm run build

publish:
	sudo npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

test-coverage:
	sudo npm test -- --coverage

