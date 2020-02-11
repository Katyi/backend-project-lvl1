import readlineSync from 'readline-sync';

const askName = () => {
	console.log('Welcome to the Brain Games!');
	const actual = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${actual}!`);
};

const evenGame = () => {
	console.log('Welcome to the Brain Games!');
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	const actual = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${actual}!`);
	const randNumber = () => Math.ceil(Math.random() * 100);
	let i = 0;

	while (i !== 3) {
		const question = randNumber();
		let Correct = '';
		let Wrong = '';

		console.log(`Question: ${question}`);
		const UserRespond = readlineSync.question('Your answer: ');
		if (question % 2 === 0) {
			Correct = 'yes';
			Wrong = 'no';
		} else {
			Correct = 'no';
			Wrong = 'yes';
		}

		if (UserRespond === Correct) {
			i += 1;
			console.log('Correct!');
		} else {
			return console.log(`'${Wrong}' is wrong answer ;(. Correct answer was '${Correct}'. \nLet's try again, ${actual}!`);
		}
	}
	console.log(`Congratulations, ${actual}!`);
};

export { evenGame as default, askName };




