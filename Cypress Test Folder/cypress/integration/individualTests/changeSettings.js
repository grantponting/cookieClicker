/// <reference types="cypress" />
import cookieClick from '../../support/variables/cookieClickerPOM';

describe('Changes Settings', () =>{
	it('Changes Number Shortening Setting', () =>{
		cy.navigateToCookieClicker();
		cy.turnOffNumberShortening();
	});
});
