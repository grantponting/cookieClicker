import './commands'


class cookieClick {
	getBigCookie(){
		return cy.get('div#bigCookie')
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
	clickAndUpgrade(){
	
	}
}
export default cookieClick