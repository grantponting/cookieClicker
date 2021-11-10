import './commands';

class cookieClick {


//////Selectors/////////

getBigCookie(){
    return cy.get('div#bigCookie', { log: false });
}
getAmountOfCookies(){
    return cy.get('div#cookies', { log: false });
}
getProduct(int){
    return cy.get('div#product' + int, {log : false});
}
getUpgrade(){
    return cy.get('div#upgrade0', {log:false});
}
getSugarLumps(){
	return cy.get('div#lumpsAmount');
}
getLegacy(){
	return cy.get('div#legacyButton');
}
getInfo(){
	return cy.get('div#logButton');
}
getProductLevel(int){
	return cy.get('div#productLevel' + int);
}
getProductMute(int){
	return cy.get('div#productMute' + int);
}
getCommentText(){
	return cy.get('div#commentsText');
}
getStats(){
	return cy.get('div#statsButton');
}
getProductOwned(int){
	return cy.get('div#productOwned' + int);
}








////////Logic/////////////



clickVisibleButton(){                //recursively clicks the cookie
       cy.get( 'body', { log: false }).then( $search => {
            const isVisible = $search.find( 'div#bigCookie').is( ':visible' );
            if ( isVisible ) {
                const cookieClicker = new cookieClick();
                cookieClicker.getBigCookie().click({ log: false });
                this.clickVisibleButton();
            }
        } );
    }

upgradeTest(int){
    const cookieClicker = new cookieClick();
	if(int < 18){
		cy.get("body", {log : false}).then($body => {
	    	if($body.find('div#upgrade0.crate.upgrade.enabled').length != 0){			//upgrades first overall upgrade if it can be 
		    	cookieClicker.getUpgrade().click({log:false});
    		}
	    	else if ($body.find('div#product' + int + '[class*="product unlocked enabled"]').length != 0) {  //buys the building if it can be
		    	cookieClicker.getProduct(int).click({log:false});
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

clickAndUpgrade(int){                  //recursively clicks the big cookie
	cy.get( 'body', { log: false }).then( $search => {
            const isVisible = $search.find( 'div#bigCookie').is( ':visible' );
            if ( isVisible ) {
			    const cookieClicker = new cookieClick();
                cookieClicker.getBigCookie().click({ log: false });
			    int = int +1;

			    if(int > 20){     //after 21 clicks checks if it can upgrade
				    const cookieClicker = new cookieClick();
				    cookieClicker.upgradeTest(0);
				    int = 0;
			    }
                this.clickAndUpgrade(int);
            }
        } );
}
}
export default cookieClick;