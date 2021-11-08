/// <reference types="cypress" />
import cookieClick from '../../support/variables/cookie';


describe('Changes Settings', () =>{
	it('Changes Number Shortening Setting', () =>{
		cy.navigateToCookieClicker();
		cy.turnOffNumberShortening();
	})
})
