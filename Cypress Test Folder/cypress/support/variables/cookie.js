import './commands'
import upgrades from './upgrades'

class cookieClick {
	getBigCookie(){
		return cy.get('div#bigCookie');
	}
	getAmountOfCookies(){
		return cy.get('div#cookies');
	}
	
	clickVisibleButton(){
        cy.get( 'body', { log: false }).then( $search => {
            const isVisible = $search.find( 'div#bigCookie').is( ':visible' );
            if ( isVisible ) {
                cy.get( 'div#bigCookie', { log: false }).click({ log: false });
                this.clickVisibleButton();
            }
        } );
    }

	upgradeTest(int){
		const upgrade = new upgrades();
		if(int < 18)
			upgrade.getProduct().get('span#productPrice' + int, { log: false }).invoke('text', ({ log: false })).then((text) =>{ 
				int = int + 1;
				this.upgradeTest(int); 
			});
		else{
			return false; 
		}
	}



	clickAndUpgrade(){
		cy.get( 'body', { log: false }).then( $search => {
            const isVisible = $search.find( 'div#bigCookie').is( ':visible' );
            if ( isVisible ) {
                cy.get( 'div#bigCookie', { log: false }).click({ log: false });
				
				const cookieClicker = new cookieClick();
				cookieClicker.upgradeTest(0); 

                this.clickAndUpgrade();
            }
        } );
	}
}
export default cookieClick