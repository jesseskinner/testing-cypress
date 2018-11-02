
describe('Cypress', () => {
	it('Loads and shows a button', () => {
		cy.visit('http://127.0.0.1:8080/');

		cy.get('button').should('have.text', 'Click Me!');
	});

	it('should show a message when the button is clicked', () => {
		cy.visit('http://127.0.0.1:8080/');

		cy.get('button').click();

		cy.get('#message').should('have.text', 'You have clicked 1 time');
	});

	it('should show increment the counter when the button is clicked twice', () => {
		cy.visit('http://127.0.0.1:8080/');

		cy.get('button').click().click();

		cy.get('#message').should('have.text', 'You have clicked 2 times');
	});
});
