import {elements} from '../fixtures/selector'
describe('PAGE OBJECT PRACTICE', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('standard user', ()=>{
        cy.get(elements.usernameField).type(elements.standardUser)
        cy.get(elements.passwordField).should('be.visible').type(elements.password).and('be.empty')
        cy.get(elements.loginButton).should('be.visible').and('be.empty') .click()
        cy.get(elements.Allproduct).should('be.visible')
        cy.get(elements.SLBackpack).should('be.visible').click()
        cy.get(elements.SLBLight).should('be.visible').click()
        cy.get(elements.SLBTShirt).should('be.visible').click()
        cy.get(elements.SLFJACKET).should('be.visible').click()
        cy.get(elements.SLOnesie).should('be.visible').click()
        cy.get(elements.AllThethingsTshirt).should('be.visible').click()
        cy.get(elements.Cart).click()
        cy.get(elements.CartItem).should('have.length.greaterThan', 5).and('not.be.empty')
        cy.get(elements.Checkout).should('be.visible').click()
        cy.get(elements.Firstname).type('Oyindamola')
        cy.get(elements.Lastname).type('Rasheed')
        cy.get(elements.Zipcode).type(1234)
        cy.get(elements.Continue).click()
        cy.get(elements.Finish).click()
        cy.get(elements.Backhome).click()
        cy.get(elements.Select).click()
        cy.get(elements.Logout).click()
        
        
        

    



        
        

        

    
    })
})