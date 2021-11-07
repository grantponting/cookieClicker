/// <reference types="cypress" />
import cookieClick from '../../support/variables/cookie';


describe('Basic Tests', () =>{
	
	it('Click', () =>{
		const cookieClicker = new cookieClick();
		cy.navigateToCookieClicker();

		cy.turnOffNumberShortening();


		

		cookieClicker.getBigCookie().click(); 
		
	})



})
