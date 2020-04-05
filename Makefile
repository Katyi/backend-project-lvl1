# Makefile

Install:
	sudo npm install

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-even:
	npx babel-node src/bin/brain-even.js

brain-prime:
	npx babel-node src/bin/brain-prime.js

brain-gcd:
	npx babel-node src/bin/brain-gcd.js

brain-progression:
	npx babel-node src/bin/brain-progression.js

build:
	rm -rf dist
	npm run build

publish:
	sudo npm publish --dry-run

lint:
	npx eslint .


