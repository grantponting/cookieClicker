import cookieClick from './functions';


Cypress.Commands.add('navigateToCookieClicker', () =>{			//Navigates to the site and waits for the loading screen to disappear
	const cookieClicker = new cookieClick();
	cy.visit('https://orteil.dashnet.org/cookieclicker/');
	cookieClicker.getLoadingScreen().should("not.exist"); 
})

Cypress.Commands.add('turnOffNumberShortening', () =>{           //Unshortens the numbers so that the full numbers are read in
	const cookieClicker = new cookieClick();
	cookieClicker.getOptions().click();
	cookieClicker.getShortNumbersButton().click();
	cookieClicker.getOptions().click();
})

