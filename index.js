let counter = 0;

document.querySelector('button').addEventListener('click', event => {
	event.preventDefault();

	document.querySelector(
		'#message'
	).innerText = `You have clicked ${++counter} time${
		counter === 1 ? '' : 's'
	}`;
});
