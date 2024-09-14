
describe('POM FIXTURE 1 LOCAL TEST', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.title().should('equal', 'Swag Labs')
        
    })
    it('Verify user can log in with valid username and password successfully', () => {
        cy.fixture('example').then((el) => {
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
        })
    })
    it('Verify user can not log in with invalid username and password ', () => {
        cy.fixture('example').then((el) => {
            cy.get(el.usernameField).type(el.invalidUsername)
            cy.get(el.passwordField).type(el.Invalidpassword)
            cy.get(el.loginButton).click()
        })
    })
    it('Verify user can add to cart & product are visible', () => {
        cy.fixture('example').then((el) => {
        cy.get(el.usernameField).type(el.standardUser)
        cy.get(el.passwordField).type(el.password)
        cy.get(el.loginButton).click()
        cy.get(el.SLBackpack).should('be.visible').click()
        cy.get(el.SLBLight).should('be.visible').click()
        cy.get(el.SLBTShirt).should('be.visible').click()
        cy.get(el.SLFJACKET).should('be.visible').click()
        cy.get(el.SLOnesie).should('be.visible').click()
        cy.get(el.AllThethingsTshirt).should('be.visible').click()
    })
})
it('Verify User can proceed to clicking the cart button', () => {
    cy.fixture('example').then((el) => {
        cy.get(el.usernameField).type(el.standardUser)
        cy.get(el.passwordField).type(el.password)
        cy.get(el.loginButton).click()
        cy.get(el.SLBackpack).should('be.visible').click()
        cy.get(el.SLBLight).should('be.visible').click()
        cy.get(el.SLBTShirt).should('be.visible').click()
        cy.get(el.SLFJACKET).should('be.visible').click()
        cy.get(el.SLOnesie).should('be.visible').click()
        cy.get(el.AllThethingsTshirt).should('be.visible').click()
        cy.get(el.Cart).should('be.visible').click()

    })
})
it('Verify User can click on the check out button', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .click()
        })
  })
  it('Verify User can type in the Firstname Field Provided', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .should('be.visible').click()
            cy.get(el.Firstname) .type('Oyindamola')

        }) 
})
it('Verify User can type in the Lastname Field Provided', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .should('be.visible').click()
            cy.get(el.Firstname) .type('Oyindamola')
            cy.get(el.Lastname) .type('Rasheed')

        }) 
})
it('Verify User can type in the Zip code in the Field Provided', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .should('be.visible').click()
            cy.get(el.Firstname) .type('Oyindamola')
            cy.get(el.Lastname) .type('Rasheed')
            cy.get(el.Zipcode) .type('1234')

        }) 
})
it('Verify User can click on the continue button', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .should('be.visible').click()
            cy.get(el.Firstname) .type('Oyindamola')
            cy.get(el.Lastname) .type('Rasheed')
            cy.get(el.Zipcode) .type('1234')
            cy.get(el.Continue) .click()

        }) 
})
it('Verify User can click on the Finish button', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .should('be.visible').click()
            cy.get(el.Firstname) .type('Oyindamola')
            cy.get(el.Lastname) .type('Rasheed')
            cy.get(el.Zipcode) .type('1234')
            cy.get(el.Continue) .click()
            cy.get(el.Finish) .click()

        }) 
})
it('Verify User can click on the Back Home button', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .should('be.visible').click()
            cy.get(el.Firstname) .type('Oyindamola')
            cy.get(el.Lastname) .type('Rasheed')
            cy.get(el.Zipcode) .type('1234')
            cy.get(el.Continue) .click()
            cy.get(el.Finish) .click()
            cy.get(el.Backhome) .click()

        }) 
})
it('Verify User can Log out successfully', () => {
    cy.fixture('example').then((el) =>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.get(el.SLBackpack).should('be.visible').click()
            cy.get(el.SLBLight).should('be.visible').click()
            cy.get(el.SLBTShirt).should('be.visible').click()
            cy.get(el.SLFJACKET).should('be.visible').click()
            cy.get(el.SLOnesie).should('be.visible').click()
            cy.get(el.AllThethingsTshirt).should('be.visible').click()
            cy.get(el.Cart).should('be.visible').click()
            cy.get(el.Checkout) .should('be.visible').click()
            cy.get(el.Firstname) .type('Oyindamola')
            cy.get(el.Lastname) .type('Rasheed')
            cy.get(el.Zipcode) .type('1234')
            cy.get(el.Continue) .click()
            cy.get(el.Finish) .click()
            cy.get(el.Backhome) .click()
            cy.get(el.Select) .click()
            cy.get(el.Logout) .click()

        }) 
})
})
