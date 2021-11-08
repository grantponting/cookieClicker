import './commands'



class upgradesClass{

	getProduct(){
		return cy.get('div#products', { log: false }).get('div.content', { log: false }).get('span.price', { log: false });
	}
	getUpgrade(){
		return cy.get('div#upgrade0', { log: false });
	}

}
export default upgradesClass