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
		if(int < 18){
			cy.get("body", {log : false}).then($body => { 
				if($body.find('div#upgrade0.crate.upgrade.enabled').length != 0){			//upgrades first overall upgrade if it can be 
					upgrade.getUpgrade().click({log:false}); 
				}
				else if ($body.find('div#product' + int + '[class*="product unlocked enabled"]').length != 0) {  //buys the building if it can be
					upgrade.getProduct(int).click({log:false});
					int = int + 1;
					this.upgradeTest(int);
				}
				else{     //continues through the list of buildings
			 		int = int + 1;
					this.upgradeTest(int);
				}
			});
		}
		else {
			int = 0; 
			return false;
		}	 
	}

	clickAndUpgrade(int){			//inifinitely clicks the big cookie, after 21 clicks it will check the to see if it can upgrade anything
		cy.get( 'body', { log: false }).then( $search => {
            const isVisible = $search.find( 'div#bigCookie').is( ':visible' );
            if ( isVisible ) {
                cy.get( 'div#bigCookie', { log: false }).click({ log: false });    
				int = int +1;

				if(int > 20){
					const cookieClicker = new cookieClick();
					cookieClicker.upgradeTest(0); 
					int = 0; 
				}

                this.clickAndUpgrade(int);
            }
        } );
	}
}
export default cookieClick