import './commands'


class preClick{
	getOptions(){
		return cy.get('div#prefsButton.button');
	}
	getShortNumbersButton(){
		return cy.get('a#formatButton.option');
	}
	getLoadingScreen(){
		return cy.get('div#loader');
	}
}
export default preClick