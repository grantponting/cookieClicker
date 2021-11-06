import './commands'


class cookieClick {
	getBigCookie(){
		return cy.get('div#bigCookie')
	}
	getOptions(){
		return cy.get('div#prefsButton.button')
	}
	getShortNumbersButton(){
		return cy.get('a#formatButton.option')
	}
	getLoadingScreen(){
		return cy.get('div#loader')
	}
	clickVisibleButton = () => {
        cy.get( 'body', { log: false }).then( $search => {
            const isVisible = $search.find( 'div#bigCookie').is( ':visible' );
            if ( isVisible ) {
                cy.get( 'div#bigCookie', { log: false }).click({ log: false });
                this.clickVisibleButton();
            }
        } );
    }
}
export default cookieClick