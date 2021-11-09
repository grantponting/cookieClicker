import './commands'



class upgradesClass{

	getProduct(int){
		return cy.get('div#product' + int, {log : false});
	}
	getUpgrade(){
		return cy.get('div#upgrade0', {log:false});
	}

}
export default upgradesClass