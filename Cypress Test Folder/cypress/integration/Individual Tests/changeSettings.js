/// <reference types="cypress" />
import cookieClick from '../../support/Settings/functions';


describe('Changes Settings', () =>{
	it('Changes Number Shortening Setting', () =>{
		const cookieClicker = new cookieClick();
		cy.navigateToCookieClicker();

		cy.turnOffNumberShortening();
	})
})
