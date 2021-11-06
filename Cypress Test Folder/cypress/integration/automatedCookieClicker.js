/// <reference types="cypress" />
import cookieClick from '../../support/Settings/functions';


describe('Basic Tests', () =>{
	
	it('Click', () =>{
		const cookieClicker = new cookieClick();
		cy.navigateToCookieClicker();

		cy.turnOffNumberShortening();


		

		cookieClicker.getBigCookie().click(); 
		
	})



})
