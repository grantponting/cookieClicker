/// <reference types="cypress" />


describe('Basic Tests', () =>{
	it('test one', () =>{
		cy.visit('https://orteil.dashnet.org/cookieclicker/') //visits the cookie clicker site

		cy.contains('') //searches for text works partially
		cy.contains('').should('exist') //implicitly the same thing, but turns the statement into an assertion


	})
})






