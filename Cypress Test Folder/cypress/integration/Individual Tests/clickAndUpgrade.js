/// <reference types="cypress" />
import cookieClick from '../../support/variables/cookie';


describe('Large amount of clicks', () =>{
	
	it('Clicks', () =>{
		cy.viewport(1080, 1000);					//Purely cosmetic. Hard to view auto clicks without this change
		cy.navigateToCookieClicker();


		cy.on('uncaught:exception', (err, runnable) => {			//was having an issue with play() request causing the program to fail, this fixes it
			expect(err.message, { log: false }).to.include('The play() request was interrupted by a new load request')
			return false
		}); 

		const cookieClicker = new cookieClick();
		cookieClicker.clickAndUpgrade();
	})
})