/// <reference types="cypress" />
import cookieClickerTest from '../../support/index';


describe('Basic Tests', () =>{
	
	it('Click', () =>{
		const cookieClicker = new cookieClickerTest()
		cy.navigateToCookieClicker();

		cookieClicker.getLoadingScreen().should("not.exist"); 

		cy.turnOffNumberShortening();
		cookieClicker.getBigCookie().click(); 
		
	})



})
