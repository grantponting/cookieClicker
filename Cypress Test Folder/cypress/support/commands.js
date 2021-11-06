import cookieClickerTest from './index';


Cypress.Commands.add('navigateToCookieClicker', () =>{			//Navigates to the site
	cy.visit('https://orteil.dashnet.org/cookieclicker/')
})

Cypress.Commands.add('turnOffNumberShortening', () =>{           //Unshortens the numbers so that the full numbers are read in
	const cookieClicker = new cookieClickerTest();
	cookieClicker.getOptions().click();
	cookieClicker.getShortNumbersButton().click();
	cookieClicker.getOptions().click();
})

