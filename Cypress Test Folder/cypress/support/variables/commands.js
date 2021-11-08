import cookieClick from './cookie';
import preClick from './preClick';


Cypress.Commands.add('navigateToCookieClicker', () =>{			//Navigates to the site and waits for the loading screen to disappear
	const preClicker = new preClick();
	cy.visit('https://orteil.dashnet.org/cookieclicker/');
	preClicker.getLoadingScreen().should("not.exist"); 
})

Cypress.Commands.add('turnOffNumberShortening', () =>{           //Unshortens the numbers so that the full numbers are read in
	const preClicker = new preClick();
	preClicker.getOptions().click();
	preClicker.getShortNumbersButton().click();
	preClicker.getOptions().click();
})
